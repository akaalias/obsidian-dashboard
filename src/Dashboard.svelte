<script lang="ts">
    export let dashboardManager;
</script>

<h1>Dashboard</h1>

<h2>All Files</h2>
{dashboardManager.getFileCount()}

<h2>Markdown Files</h2>
{dashboardManager.getMarkdownFileCount()}
