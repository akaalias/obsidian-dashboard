import type {Vault} from "obsidian";

export default class DashboardManager {
    private vault: Vault;

    constructor(vault: Vault) {
        this.vault = vault;
    }

    getFileCount() {
        return this.vault.getFiles().length;
    }

    getMarkdownFileCount() {
        return this.vault.getMarkdownFiles().length;
    }
}
