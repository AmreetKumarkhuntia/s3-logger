<script lang="ts">
    import { updateFilteredS3Logs } from "$stores/session";
    import { TreeView, TreeViewItem } from "@skeletonlabs/skeleton";
    import type { Filter } from "$generated/types";

    let optionBind: string[] = [];
    export let filterOptions: Filter[] = [];
    export let applyFilter: (filterOptions: Filter[]) => void;
    export let clearFilter: () => void;

    function handleApplyFilter() {
        if (applyFilter) {
            applyFilter(filterOptions);
        }
    }

    function handleClearFilter() {
        clearFilter();
    }
</script>

<div class="filter">
    <div class="h5 title-border-bottom">FILTER SECTION</div>

    {#each filterOptions as filterOption}
        <div class="filter-options">
            <TreeView selection multiple>
                <TreeViewItem
                    bind:group={optionBind}
                    name={filterOption.labelName}
                    value={filterOption.values}
                >
                    <div class="filter-item text2">
                        {filterOption.labelName}
                    </div>
                    <svelte:fragment slot="children">
                        {#each filterOption.values as filterValue}
                            <TreeViewItem
                                bind:group={filterOption.valueHolder}
                                name={filterValue.label}
                                value={filterValue}
                            >
                                <div class="filter-item text2">
                                    <div>{filterValue.label}</div>
                                    <div class="bold">
                                        COUNT: {filterValue.count}
                                    </div>
                                </div>
                            </TreeViewItem>
                        {/each}
                    </svelte:fragment>
                </TreeViewItem>
            </TreeView>
        </div>
    {/each}
    <div class="filter-buttons">
        <button class="blue-button text3" on:click={() => handleApplyFilter()}>
            APPLY FILTERS
        </button>
        <button class="blue-button text3" on:click={() => handleClearFilter()}>
            CLEAR FILTERS
        </button>
    </div>
</div>

<style>
    .filter {
        padding: 10%;
    }

    .filter-options {
        transition:
            box-shadow 0.3s ease,
            border-color 0.3s ease;
        border-radius: 8px;
        border: 2px solid transparent;
        cursor: pointer;
    }

    .filter-options:hover {
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        border-color: #007acc;
    }

    .filter-options:active {
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
        border-color: #005fa3;
    }

    .filter-item {
        display: flex;
        justify-content: center;
        padding-top: 4px;
        overflow-wrap: anywhere;
        flex-direction: column;
        text-transform: capitalize;
    }

    .filter-buttons{
        display: flex;
        justify-content: space-evenly;
    }
</style>
