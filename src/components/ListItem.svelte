<script>
  import { onMount, onDestroy, createEventDispatcher } from 'svelte'

  export let primary = ''
  export let secondary = ''

  export let showArrow = true

  /**
   * @type HTMLUListElement
   */
  let listElement

  let selected = false

  const dispatch = createEventDispatcher()

  const keydownEvent = event => {
    if (selected) {
      switch (event.key) {
        case 'Enter':
          return dispatch('itemActionEnter')
        case 'SoftLeft':
          return dispatch('itemActionLeft')
        case 'SoftRight':
          return dispatch('itemActionRight')
      }
    }
  }

  onMount(() => {
    const observer = new MutationObserver(mutations => {
      Array.from(mutations).forEach(() => {
        selected = listElement.getAttribute('nav-selected') === 'true'
      })
    })

    observer.observe(listElement, {
      attributes: true
    })

    document.addEventListener('keydown', keydownEvent)
  })

  onDestroy(() => {
    document.removeEventListener('keydown', keydownEvent)
  })
</script>

<li
  bind:this={listElement}
  class="px-2 py-4 flex flex-col relative"
  class:bg-white={!selected}
  class:bg-purple-400={selected}
  nav-selectable>
  {#if primary}
    <div
      class="text-xl"
      class:text-black={!selected}
      class:text-white={selected}>{primary}</div>
  {/if}
  {#if secondary}
    <div
      class="text-lg"
      class:text-gray-700={!selected}
      class:text-white={selected}>{secondary}</div>
  {/if}

  {#if showArrow}
    <span
      class="absolute right-2 top-1/2 -translate-y-1/2 transform"
      class:text-gray-700={!selected}
      class:text-white={selected}> &rAarr; </span>
  {/if}
</li>