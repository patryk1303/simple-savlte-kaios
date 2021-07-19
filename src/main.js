import 'core-js'

import App from './App.svelte';

const simpleApp = new App({
	target: document.getElementById('app')
});

export default simpleApp;