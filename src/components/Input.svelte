<script lang="ts">
	export let type: string = 'text';
	export let placeholder: string | null;
	export let inputValue: any;
	export let inputNode: HTMLInputElement | HTMLTextAreaElement | null = null;
	export let onEnter: () => void = () => {
		return;
	};

	export function focusAction() {
		inputNode && inputNode.focus();
	}

	function typeAction(node: HTMLInputElement) {
		node.type = type;
	}
</script>

<div class="input">
	<slot />
	{#if type !== 'textarea'}
		<input
			use:typeAction
			{placeholder}
			bind:value={inputValue}
			bind:this={inputNode}
			on:keypress={(e) => {
				if (e.key === 'Enter') {
					onEnter();
				}
			}}
		/>
	{:else}
		<textarea
			{placeholder}
			bind:value={inputValue}
			bind:this={inputNode}
			on:keypress={(e) => {
				if (e.key === 'Enter') {
					onEnter();
				}
			}}
		/>
	{/if}
</div>

<style lang="scss">
	.input {
		display: flex;
		align-items: center;

		padding: 0px 20px;

		background-color: var(--container-lowest-bg-color);
		box-shadow: 8px 8px #D3D3D34a;
		border-radius: 5px;

		input,
		textarea {
			width: 100%;
			height: inherit;

			background: transparent;
			outline: none;
			border: none;

			padding: 15px 20px;

			color: var(--font-color);
			font-size: 1rem;

			&:only-child {
				padding: 15px 0px;
			}
		}

		textarea {
			resize: vertical;
		}
	}
</style>