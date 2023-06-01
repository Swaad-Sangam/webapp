<script lang="ts">
	import { onMount } from 'svelte';

	export let placeholder: string = '';
	export let options: string[] = [];
	export let selected: string[] | string;
	export let isMulti: boolean = false;

	let isOpen: boolean = false;
	let focusIndex: number = 0;
	let search: string;
	let searchDiv: HTMLDivElement;
	const originalOptions: string[] = [...options];

	onMount(() => {
		window &&
			window.addEventListener('keypress', (e) => {
				if (e.key === 'ArrowDown') {
					e.preventDefault();
					focusIndex = focusIndex === options.length - 1 ? 0 : focusIndex + 1;
				} else if (e.key === 'ArrowUp') {
					e.preventDefault();
					focusIndex = focusIndex === 0 ? options.length - 1 : focusIndex - 1;
				}
			});
		window && window.addEventListener('click', (e) => {
			if (e.target !== searchDiv) {
				isOpen = false;
			}
		});
	});

	$: if (search) {
		options = originalOptions.filter(
			(option) => option.toLowerCase().includes(search.toLowerCase()) && !selected.includes(option)
		);
	} else {
		options = originalOptions.filter((option) => !selected.includes(option));
	}
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class="Select" on:click={() => (isOpen = !isOpen)} on:blur={() => (isOpen = false)}>
	<div class="SelectedOptions">
		{#if selected}
			{#if isMulti}
				{#each selected as soption}
					<!-- svelte-ignore a11y-click-events-have-key-events -->
					<span
						class="option"
						on:click={() => {
							// @ts-ignore
							selected = selected.filter((option) => option !== soption);
						}}>{soption}</span
					>
				{/each}
			{:else}
				<span class="option">{selected}</span>
			{/if}
		{/if}
		<div
			class="input"
			contenteditable="true"
			bind:innerText={search}
			bind:this={searchDiv}
			on:keydown={(e) => {
				if (e.key === 'Enter') {
					e.preventDefault();
					if (isMulti) {
						if (search.length > 0) {
							selected = [...selected, search];
							search = '';
						} else {
							selected = [...selected, options[focusIndex]];
						}
					} else {
						selected = search;
					}
				} else if (e.key === 'Backspace') {
					if (search.length === 0 && isMulti) {
						e.preventDefault();
						selected = selected.slice(0, -1);
					}
				}
			}}
		/>
	</div>
	{#if isOpen}
		<div class="SelectOptions">
			{#each options as option, i}
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<div
					class="option {i === focusIndex ? 'focus' : ''}"
					on:click={() => {
						if (isMulti) {
							selected = selected.includes(option) ? selected : [...selected, option];
						} else {
							selected = option;
							isOpen = false;
						}
					}}
				>
					<span>{option}</span>
				</div>
			{/each}
		</div>
	{/if}
</div>

<style lang="scss">
	.Select {
		position: relative;

		.SelectedOptions {
			width: inherit;
			height: fit-content;
			min-height: 3vh;

			display: flex;
			align-items: center;
			gap: 1rem;

			padding: 1rem 1rem;
			background-color: var(--container-lowest-bg-color);
			border-radius: 5px;

			.input {
				width: 100%;

				&:active {
					outline: none;
				}
			}

			.option {
				display: flex;
				align-items: center;

				background-color: var(--container-bg-color);
				padding: 0.25rem 0.5rem;
				border-radius: 3px;
				white-space: nowrap;
			}
		}

		.SelectOptions {
			position: absolute;
			top: 100%;
			left: 0;
			z-index: 1000;

			width: 100%;

			display: flex;
			flex-direction: column;

			margin-top: 2px;

			.option {
				display: flex;
				align-items: center;
				justify-content: space-between;

				padding: 1rem 1rem;
				background-color: var(--container-lowest-bg-color);
				border-radius: 5px;

				&:hover,
				&.focus {
					background-color: var(--container-high-bg-color);
				}
			}
		}
	}
</style>
