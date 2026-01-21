<script>
	import '../app.css';
	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';

	let { children } = $props();
</script>

<Navbar />

<main>
	{@render children()}
</main>

<Footer />

<style>
    :global(body) {
        margin: 0;
        background-color: black;
        color: white;
        overflow: hidden; 
    }

    main {
        /* if this doesnt fix the gap im GOING to crash out */
        height: calc(100vh - 120px); 
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>