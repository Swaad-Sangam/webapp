<script>
	import { isLoading } from "$lib/stores";

    isLoading.set(false);
</script>

<section class="left">
    <section>
        <div>Some content 1</div>
        <div>Some more 1</div>
    </section>
    <section class="right">
        <div>Some content 2</div>
        <div>Some more 2</div>
    </section>
</section>  

<style>
    .left {
        float: left;
        width: 100%;
    }
    .left section {
        width: 50%; 
        float: left;
    }
    .right {
        float: right;
        width: 100%;
    }
</style>