<div class="TopBar">
	<div class="logo" />
	<div class="profile">
        <div class="dp"><Icon data={user}/></div>
        <div class="details">
            <div class="name">User</div>
            <div class="bio">Bio</div>
        </div>
    </div>
</div>

<style lang="scss">
	.TopBar {
		display: flex;
		align-items: center;
		gap: 1rem;

		justify-content: space-between;

		background-color: var(--container-lowest-bg-color);
		padding: 0.5rem;

		.logo {
			height: 1rem;
			width: 1rem;
		}

		.profile {
            display: flex;
            align-items: center;
            gap: 0.5rem;

            background-color: var(--container-low-bg-color);
            padding: 0.25rem 1rem;

            border-radius: 1rem;

            .dp {
                width: 2rem;
                height: 2rem;
            }

            .details {
                display: flex;
                flex-direction: column;

                padding: 0.25rem 0rem;

                @media screen and (max-width: 768px) {
                    display: none;
                }

                .name {
                    font-size: 1rem;
                    font-weight: 500;
                }

                .bio {
                    font-size: 0.9rem;
                    font-weight: 400;
                }
            }
        }
	}
</style>

<script>
import Icon from 'svelte-awesome';

import user from 'svelte-awesome/icons/user';
</script>
