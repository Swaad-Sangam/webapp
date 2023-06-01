<div class="BottomBar">
    <div class="Route">
        <div class="icon"><Icon data="{search}"/></div>
        <div class="name">Explore</div>
    </div>
    <div class="Route">
        <div class="icon"><Icon data="{group}"/></div>
        <div class="name">Area Group</div>
    </div>
    <div class="Route">
        <div class="icon"><Icon data={locationArrow}/></div>
        <div class="name">Local</div>
    </div>
</div>

<style lang="scss">
	.BottomBar {
		display: flex;
		align-items: center;
		gap: 1rem;
		justify-content: space-evenly;

		background-color: var(--container-lowest-bg-color);
		padding: 0.25rem;

		.Route {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 0.25rem;

            background-color: var(--container-low-bg-color);
            padding: 0.25rem 1rem;
            border-radius: 1rem;

            cursor: pointer;

            .icon {
                font-size: 1.25rem;
            }

            .name {
                font-size: 0.9rem;
                font-weight: 500;
            }
        }
	}
</style>

<script>
import Icon from 'svelte-awesome';

import search from 'svelte-awesome/icons/search';
import group from 'svelte-awesome/icons/group';
import locationArrow from 'svelte-awesome/icons/locationArrow';
</script>
