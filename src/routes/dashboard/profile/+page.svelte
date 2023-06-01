<script>
import { faBookmark, faComment, faHeart, faShareNodes } from '@fortawesome/free-solid-svg-icons';
</script>

<div class="container">
    <img src="https://i.imgur.com/8Km9tLL.png" alt="user" /><br/>
    <h2>Hello User</h2>
    <p><strong>User Name</strong> : </p>
    <p><strong>Email</strong>: user@universe.com</p>
    <p><strong>Bio</strong>: </p> 

    <hr>

    <div class="Posts">
        {#each { length: 8 } as _, i}
            <div class="post">
                <div class="photo">
                    <img
                        src="https://images.immediate.co.uk/production/volatile/sites/30/2022/08/Chicken-Tikka-99647a6.jpg"
                    />
                </div>
            </div>
        {/each}
    </div>
</div>

<style lang="scss">
body{
    overflow: hidden;
}
.container{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100vh;
    margin: 25px auto;
    text-align: center;
    padding: 20px;
    background: #fff;
    border-radius: 15px;
    box-shadow: 0 4px 10px 4px rgba(19, 35, 47, 0.3);
    padding-left: 3rem;
    padding-top: 2.5rem;
}

hr{
    background: black;
    width: 80vh;
    height: 2px;
    margin-top: 1rem;
}
h2{
    margin-top: 0;
}
p{
    margin-bottom: 0;
    margin-top: 0;
}

img{
    border-radius: 10px;
    height: 100px;
    width: 100px;
}

.Posts {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr 1fr;
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