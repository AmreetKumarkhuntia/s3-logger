<script lang="ts">
    import {
        session,
        updateActiveS3Log,
        updateMaxS3LogView,
        updateFilterOptions,
        updateFilteredS3Logs,
    } from "$lib/stores/session";
    import { onMount } from "svelte";
    import { CodeBlock } from "@skeletonlabs/skeleton";
    import { formatJson } from "$utils/common";
    import FilterSection from "$components/FilterSection/FilterSection.svelte";
    import { getS3FilterOptions } from "$services/filters";
    import type { Filter, S3Logs } from "$generated/types";

    $: sessionLogs = $session.filteredS3Logs;

    function loadFilters() {
        const filterOptions = getS3FilterOptions(
            $session.filteredS3Logs,
            $session.S3logFilters,
        );
        updateFilterOptions(filterOptions);
        console.log("SET FILTERED OPTIONS: ", filterOptions);
    }

    function handleS3LogClick(logId: string) {
        if (logId === $session.activeS3Log) {
            updateActiveS3Log("");
        } else {
            updateActiveS3Log(logId);
        }
    }

    function handleViewMore() {
        updateMaxS3LogView(30);
        loadFilters();
    }

    function isActiveLog(logId: string): boolean {
        if ($session.activeS3Log !== logId) {
            return false;
        } else {
            return true;
        }
    }

    function handleApplyFilter(fillterOptions: Filter[]) {
        let filteredObjects: S3Logs[] = [];
        let filterValueIsNotEmptyCount = 0;
        let currentLogs = $session.S3Logs ?? [];
        let toShow = false;

        for (const currentLog of currentLogs) {
            toShow = true;
            for (const fillterOption of fillterOptions) {
                if (fillterOption.valueHolder.length !== 0)
                    filterValueIsNotEmptyCount++;
                for (const value of fillterOption.valueHolder) {
                    if (
                        currentLog[fillterOption.labelName as keyof S3Logs] ===
                        value.value
                    ) {
                        toShow = toShow && true;
                    } else {
                        toShow = toShow && false;
                    }
                }
            }
            if (toShow) filteredObjects.push(currentLog);
        }
        if (filterValueIsNotEmptyCount !== 0) {
            console.log("APPLYING FILTER:", filteredObjects);
            updateFilteredS3Logs(filteredObjects);
            loadFilters();
        }
    }

    function handleClearFilter() {
        updateFilteredS3Logs($session.S3Logs ?? []);
        loadFilters();
    }

    onMount(function () {
        loadFilters();
    });
</script>

<div class="log-viewer">
    <div class="filter-section">
        <FilterSection
            bind:filterOptions={$session.filterOptions}
            applyFilter={handleApplyFilter}
            clearFilter={handleClearFilter}
        />
    </div>
    <div class="s3-logs-viewer-container">
        {#if sessionLogs}
            {#each sessionLogs.slice(0, $session.maxS3LogView) as sessionLog}
                <div class="s3-log-container">
                    <div class="s3-log-text text">
                        {sessionLog.logText ? sessionLog.logText : ""}
                    </div>
                    <button
                        class="blue-button text3"
                        on:click={(e) => handleS3LogClick(sessionLog.id)}
                    >
                        {!isActiveLog(sessionLog.id)
                            ? "VIEW PARSED LOG"
                            : "CLOSE PARSED LOG"}
                    </button>
                    <div
                        class={isActiveLog(sessionLog.id)
                            ? "s3-log-json-code active-log-view"
                            : "s3-log-json-code inactive-log-view"}
                    >
                        <CodeBlock language="json" code={formatJson(sessionLog)}
                        ></CodeBlock>
                    </div>
                </div>
            {/each}
            <div class="view-more-container">
                <button
                    class="blue-button text"
                    on:click={(e) => {
                        handleViewMore();
                    }}>VIEW MORE</button
                >
            </div>
        {/if}
    </div>
</div>

<style>
    .log-viewer {
        display: flex;
    }

    .filter-section {
        width: 23vw;
        height: 100vh;
        overflow-x: auto;
        box-shadow: 5px 0 10px rgba(0, 0, 0, 0.1);
        z-index: 5;

        background: radial-gradient(
                circle at center,
                #ffffff,
                #e6f0ff 70%,
                #f8e6f2
            ),
            linear-gradient(135deg, #ffffff 0%, #e6f0ff 100%);
    }

    .s3-logs-viewer-container {
        display: flex;
        flex-direction: column;
        height: 100vh;
        width: 78vw;
        overflow-x: auto;

        background: radial-gradient(
                circle at top left,
                #f7f7f7,
                #e5e7eb 50%,
                #e3f2fd
            ),
            linear-gradient(60deg, #f7f7f7 0%, #f0f0f0 50%, #d7eefb 100%);
    }

    .s3-log-container {
        padding: 2% 4%;

        border-bottom: 1px solid rgba(214, 214, 214, 0.689);
    }

    .s3-log-text {
        display: block;
        font-family: monospace;
        max-width: 100%;
        padding: 5px 0;
        border-radius: 4px;
        overflow-wrap: break-word;
    }

    .s3-log-json-code {
        display: block;
        white-space: pre-wrap;
        border-radius: 4px;
        overflow-x: auto;
        max-width: 100%;
    }

    .active-log-view {
        height: 400px;
        transition: height 500ms;
    }

    .inactive-log-view {
        height: 0px !important;
        padding: 0px;
        transition:
            height 500ms,
            padding 100ms ease 500ms;
    }

    .view-more-container {
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>
