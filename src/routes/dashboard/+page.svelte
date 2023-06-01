<div class="Posts">
	{#each { length: 8 } as _, i}
		<div class="post">
			<div class="photo">
				<img
					src="https://images.immediate.co.uk/production/volatile/sites/30/2022/08/Chicken-Tikka-99647a6.jpg"
				/>
			</div>
			<div class="details">
				<div class="dish">Paneer Tikka <span class="name">by Rahul</span></div>
                <div class="actions">
                    <div class="start">
                        <div class="action like"></div>
                        <div class="action comment"></div>
                        <div class="action share"></div>
                    </div>
                    <div class="end">
                        <div class="action bookmark"></div>
                    </div>
                </div>
			</div>
		</div>
	{/each}
</div>

<style lang="scss">
	.Posts {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
		gap: 1rem;
		padding: 1rem 2rem;

		.post {
			display: flex;
			flex-direction: column;
			padding: 1rem;

			background-color: var(--container-bg-color);
			border-radius: 1rem;

			.photo {
				img {
					width: 100%;
					height: 100%;
                    border-radius: 1rem;
				}
			}

			.details {
				display: flex;
				flex-direction: column;
				gap: 0.5rem;
				padding: 0.5rem 0rem;

				.dish {
					font-size: 1.1rem;
					font-weight: 500;

					.name {
						font-size: 1rem;
						font-weight: 400;
					}
				}

                .actions {
                    display: flex;
                    justify-content: space-between;

                    & > div {
                        display: flex;
                        gap: 1rem;

                        .action {
                            width: 1.5rem;
                            height: 1.5rem;
                            border-radius: 50%;
                        }
                    }
                }
			}
		}
	}
</style>
