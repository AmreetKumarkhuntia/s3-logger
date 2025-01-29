<script lang="ts">
    import "$css/app.css";
    import "$css/codblock.css";
    import { onMount } from "svelte";
    import hljs from "highlight.js/lib/core";
    import typescript from "highlight.js/lib/languages/typescript";
    import json from "highlight.js/lib/languages/json";
    import { storeHighlightJs } from "@skeletonlabs/skeleton";

    import { updateLogs, session, updateFilteredS3Logs } from "$stores/session";
    import { parseS3Logs } from "$services/S3LogsParser";
    import LogsView from "$components/LogsView/LogsView.svelte";
    import { type S3Logs } from "$generated/types";

    const localUrl = "http://localhost:6891/api/";

    function loadHighlighter() {
        //higlighted languages
        hljs.registerLanguage("typescript", typescript);
        hljs.registerLanguage("json", json);
        storeHighlightJs.set(hljs);
    }

    async function readLogs(): Promise<S3Logs[]> {
        let logs: S3Logs[] = [];

        const response = await fetch(`${localUrl}read/logs`);
        const data = await response.json();
        if (data?.logs) {
            logs = parseS3Logs(data.logs);
        }

        return logs;
    }

    onMount(async function () {
        loadHighlighter();
        const logs = await readLogs();
        updateLogs(logs);
        updateFilteredS3Logs(logs);
    });
</script>

<div class="app">
    <main>
        <slot></slot>
    </main>
    {#if $session.S3Logs}
        <LogsView></LogsView>
    {/if}
</div>

<style>
    main {
        margin: 0;
    }
</style>
