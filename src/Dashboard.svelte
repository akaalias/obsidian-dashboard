<script lang="ts">
    export let dashboardManager;
</script>

<r-grid columns=1>
    <r-cell span=1>
        <h2>Notes</h2>
        <div class="metric">
            {dashboardManager.getMarkdownFileCount()}
        </div>
    </r-cell>
</r-grid>