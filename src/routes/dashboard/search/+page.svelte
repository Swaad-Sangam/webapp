<script lang="ts">
	import Fa from "svelte-fa/src/fa.svelte";
    import Input from "../../../components/Input.svelte";
	import { faSearch } from "@fortawesome/free-solid-svg-icons";
	import { getRecipe } from "$lib/api";

    let inputValue: string;
    let result: any[] = [];
</script>

<div class="SearchPage">
    <Input bind:inputValue={inputValue} onEnter={()=>{
        getRecipe(inputValue).then((data)=>{
            console.log(data);
            result = data.results;
        })
    }} placeholder="Search for a recipe">
        <Fa icon={faSearch} />
    </Input>
    <div class="results">
        {#if result.length === 0}
            <div class="result">
                <span>No results found</span>
            </div>
        {/if}
        {#each result as r}
            <div class="result">
                <img src="{r.image}" alt="" />
                <span>{r.title}</span>
            </div>
        {/each}
    </div>
</div>  

<style lang="scss">
    .SearchPage {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        gap: 1rem;

        padding: 1rem;

        .results {
            display: flex;
            flex-direction: column;

            .result {
                display: flex;
                align-items: center;
                gap: 1rem;

                padding: 1rem 0rem;
                border-bottom: solid 1px var(--font-color);

                span {
                    font-size: 1.1rem;
                    font-weight: 500;
                }
            }
        }
    }
</style>