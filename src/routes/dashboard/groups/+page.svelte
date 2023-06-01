<script>
	import { faBookmark, faComment, faHeart, faShareNodes } from '@fortawesome/free-solid-svg-icons';
</script>

<div class="container">
	<div class="box">
		<div class="col left">
			<img src="https://picsum.photos/200/300" alt="Group Image" />
			<h2>Group Name</h2>
			<p>Group Description</p>
			<hr />
			<p>Group Mem</p>
		</div>
		<div class="col right" />
	</div>
</div>

<style lang="scss">
	body {
		overflow: hidden;
	}
	.container {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		width: 80%;
		height: 85%;
		margin: 25px auto;
		text-align: center;
		padding: 20px;
		background: #fff;
		border-radius: 15px;
		box-shadow: 0 4px 10px 4px rgba(19, 35, 47, 0.3);
		padding-left: 3rem;
		padding-top: 2.5rem;
	}

	hr {
		background: black;
		width: 80vh;
		height: 2px;
		margin-top: 1rem;
	}
	h2 {
		margin-top: 0;
	}
	p {
		margin-bottom: 0;
		margin-top: 0;
	}

	img {
		border-radius: 10px;
		height: 100px;
		width: 100px;
	}

    .box{
        display:table; 
        width:100%;
    }

	.col {
		display: table-cell;
		background: #ccc;
		padding: 0 20px;
	}

    .left{
        width: 10%;
    }
	.right {
        width: 90%;
		background: #eee;

	}
</style>
