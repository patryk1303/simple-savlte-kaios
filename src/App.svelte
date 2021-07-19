<script>
import router from 'page'
import { onMount } from 'svelte';

import Navigation from './Navigation'

import About from './views/About.svelte';
import Home from './views/Home.svelte';

let page = Home

router('/', () => page = Home)
router('/about', () => page = About)

router(() => page = Home)

router.start()

document.addEventListener('keydown', event => {
	switch(event.key) {
		case 'ArrowDown':
			event.preventDefault()
			return Navigation.down()
		case 'ArrowUp':
			event.preventDefault()
			return Navigation.up()
	}
})

onMount(() => {
	Navigation.onBegin()
})
</script>

<svelte:component this={page} />

<style global lang="postcss">
	@tailwind base;
	@tailwind components;
	@tailwind utilities;

	:root {
		font-size: 10px;
	}
</style>