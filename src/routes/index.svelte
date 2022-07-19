<script context="module">
    export const prerender = true;
</script>

<script>
    export let pageData;
    console.log(pageData);
</script>

<h1>Welcome to SvelteKit</h1>
<p>
    Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the
    documentation {pageData}
</p>

{#if pageData.data.title}
    <h1>title: {pageData.data.title}</h1>
{/if}
{#if pageData.data.description}
    <h1>description: {pageData.data.description}</h1>
{/if}

{#if pageData.content}
    <h1>Content</h1>

    <p>
        {@html pageData.content}
    </p>
{/if}
