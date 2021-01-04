import {FileView, ItemView, WorkspaceLeaf} from "obsidian";
import Dashboard from "./Dashboard.svelte";
import DashboardManager from "./DashboardManager";

export default class DashboardView extends ItemView {
    private dashboard: Dashboard;
    private dashboardManager: DashboardManager;

    constructor(leaf: WorkspaceLeaf) {
        super(leaf);

        this.dashboardManager = new DashboardManager(this.app.vault)
    }

    getDisplayText(): string {
        return "Dashboard";
    }

    getViewType(): string {
        return "DASHBOARD";
    }


    getIcon(): string {
        return "dice";
    }

    async onOpen(): Promise<void> {
        const activeLeaf = this.app.workspace.activeLeaf;
        const activeFile = activeLeaf
            ? (activeLeaf.view as FileView).file?.path
            : null;

        this.dashboard = new Dashboard({
            target: (this as any).contentEl,
            props: {
                fileCount: this.dashboardManager.getFileCount(),
                dashboardManager: this.dashboardManager
            }
        });
    }
}