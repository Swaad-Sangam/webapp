<div class="BottomBar">
    <div class="Route">
        <div class="icon">📚</div>
        <div class="name">Route</div>
    </div>
    <div class="Route">
        <div class="icon">📚</div>
        <div class="name">Route</div>
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
