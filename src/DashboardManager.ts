import type {Vault} from "obsidian";
import * as fs from "fs";
import path from "path";

export default class DashboardManager {
    private vault: Vault;
    private files: [];

    constructor(vault: Vault) {
        this.vault = vault;
        this.files  = [];
    }

    getMarkdownFileCount() {
        return this.vault.getMarkdownFiles().length;
    }
}
