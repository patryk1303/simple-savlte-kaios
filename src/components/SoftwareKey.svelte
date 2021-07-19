<script>
  import { createEventDispatcher } from 'svelte'
  
  const dispatch = createEventDispatcher()

  export let left = ''
  export let center = ''
  export let right = ''

  document.addEventListener('keydown', event => {
    switch (event.key) {
      case 'Enter':
        return dispatch('itemActionEnter')
      case 'SoftLeft':
        return dispatch('itemActionLeft')
      case 'SoftRight':
        return dispatch('itemActionRight')
    }
  })
</script>

<footer class="p-4 bg-gray-300 text-black absolute left-0 bottom-0 w-full z-10 grid grid-cols-3">
  {#if left}
    <div class="mr-auto text-left col-start-1 col-end-2">{left}</div>
  {/if}
  {#if center}
    <div class="mx-auto text-center col-start-2 col-end-3 font-bold">{center}</div>
  {/if}
  {#if right}
    <div class="ml-auto text-right col-start-3 col-end-4">{right}</div>
  {/if}
</footer>