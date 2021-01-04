import {FileView, ItemView, WorkspaceLeaf} from "obsidian";
import Dashboard from "./Dashboard.svelte";
import DashboardManager from "./DashboardManager";

export default class DashboardView extends ItemView {
    private dashboard: Dashboard;

    constructor(leaf: WorkspaceLeaf) {
        super(leaf);
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
            props: {dashboardManager: new DashboardManager()}
        });
    }
}