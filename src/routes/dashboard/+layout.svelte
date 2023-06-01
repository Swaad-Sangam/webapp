<script lang="ts">
	import { isLoading } from '$lib/stores';
	import BottomBar from '../../components/BottomBar.svelte';
	import TopBar from '../../components/TopBar.svelte';

    isLoading.set(false)
</script>

<section class="Dashboard">
	<TopBar />
	<div class="main">
		<slot />
	</div>
	<BottomBar />
</section>

<style lang="scss">
	.Dashboard {
		height: inherit;
		
		display: flex;
		flex-direction: column;
		justify-content: space-between;

		.main {
			width: 100%;
			height: 100%;
			align-self: center;
			overflow-y: auto;
		}
	}
</style>