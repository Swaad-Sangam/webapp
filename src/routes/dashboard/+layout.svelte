<script lang="ts">
	import { isLoading } from '$lib/stores';
	import BottomBar from '../../components/BottomBar.svelte';
	import TopBar from '../../components/TopBar.svelte';

    isLoading.set(false)
</script>

<section class="Dashboard">
	<TopBar />
	<slot />
	<BottomBar />
</section>

<style lang="scss">
	.Dashboard {
		height: inherit;
		
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}
</style>