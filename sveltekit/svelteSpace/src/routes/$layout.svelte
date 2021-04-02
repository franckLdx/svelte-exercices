<script>
	import '../global.css';
	import NavBar from '$lib/components/Nav/NavBar.svelte';
	import NavItem from '$lib/components/Nav/NavItem.svelte';
</script>

<header>
	<NavBar>
		<NavItem href=".">Home</NavItem>
		<NavItem href="about">About</NavItem>
	</NavBar>
</header>

<main>
	<slot />
</main>

<style lang="postcss">
	header {
		@apply mb-3;
	}
</style>
