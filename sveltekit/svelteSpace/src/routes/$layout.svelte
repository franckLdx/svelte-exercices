<script>
	import '../global.css';
	import NavBar from '$lib/components/Nav/NavBar.svelte';
	import NavItem from '$lib/components/Nav/NavItem.svelte';
</script>

<div>
	<header>
		<NavBar>
			<NavItem href=".">Home</NavItem>
			<NavItem href="about">About</NavItem>
		</NavBar>
	</header>

	<main>
		<slot />
	</main>
</div>

<style lang="postcss">
	div {
		@apply flex flex-col;
	}
	header {
		@apply flex-grow-0;
		@apply mb-1;
	}
	main {
		@apply flex-grow;
	}
</style>
