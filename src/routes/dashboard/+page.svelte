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
                        <div class="action like"><Fa icon={faHeart} /></div>
                        <div class="action comment"><Fa icon={faComment} /></div>
                        <div class="action share"><Fa icon={faShareNodes} /></div>
                    </div>
                    <div class="end">
                        <div class="action bookmark"><Fa icon={faBookmark} /></div>
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
					aspect-ratio: 1/1;
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

<script>
// @ts-ignore
import Fa from 'svelte-fa/src/fa.svelte'

import { faBookmark, faComment, faHeart, faShareNodes } from '@fortawesome/free-solid-svg-icons';

</script>