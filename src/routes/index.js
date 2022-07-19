
import fs from "fs";
import path from "path";
import grayMatter from "gray-matter";
export async function get() {
    const post = await fs.readFileSync(
        path.resolve("./content/blog", '2022-07-14-test.md'),
        "utf-8"
    );
    const file = await grayMatter(post)
    if (file.content) {
        file.content = await grayMatter(file.content).content
    }
    return {
        body: {
            pageData: file
        },
    };
}
