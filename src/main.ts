import { App, Modal, Notice, Plugin, PluginSettingTab, Setting, WorkspaceLeaf } from 'obsidian';
import DashboardView from "./DashboardView";

export default class DashboardPlugin extends Plugin {
	private view: DashboardView;

	async onload() {
		this.registerView(
			"DASHBOARD",
			(leaf: WorkspaceLeaf) =>
				(this.view = new DashboardView(leaf))
		);

		this.addRibbonIcon('dice', 'Dashboard', () => {
			if (this.app.workspace.layoutReady) {
				this.initLeaf();
			} else {
				this.registerEvent(
					this.app.workspace.on("layout-ready", this.initLeaf.bind(this))
				);
			}
		});


	}

	onunload() {
		console.log('Unloading dashboard');
	}

	async loadSettings() {
	}

	async saveSettings() {
	}

	initLeaf(): void {
		if (this.app.workspace.getLeavesOfType("DASHBOARD").length) {
			return;
		}
		this.app.workspace.getRightLeaf(false).setViewState({
			type: "DASHBOARD",
		});
	}
}