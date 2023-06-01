<script lang="ts">
    import './layout.scss';

	import Modal from "../components/modals/Modal.svelte";
	import { Toaster } from 'svelte-french-toast';
	import { isLoading } from "../lib/stores";
</script>

<Toaster />
<Modal />
<div id="root" class=" {$isLoading && 'isLoading'}">
	<slot />
</div>
{#if $isLoading}
	<div class="loading">
		<span class="loader" />
	</div>
{/if}
