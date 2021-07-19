<script>
import router from 'page'

import Header from "../components/Header.svelte"
import List from '../components/List.svelte'
import ListItem from '../components/ListItem.svelte'
import SoftwareKey from "../components/SoftwareKey.svelte"
import PageContent from '../components/PageContent.svelte'

const navigation = [
  {
    primary: 'About',
    secondary: 'Shows about page',
    onEnter() {
      router('/about')
    }
  },
  {
    primary: 'Lorem',
    secondary: 'Lorem ipsum',
    showArrow: false,
    onEnter() {
      alert('Lorem ipsum')
    }
  },
  {
    primary: 'Foo',
    secondary: 'Bar',
    showArrow: false,
    onEnter() {
      alert('Foo Bar')
    }
  },
  {
    primary: 'Baz',
    showArrow: false,
    onEnter() {
      alert('Baz')
    }
  },
  {
    primary: 'Fizz',
    secondary: 'Buzz',
    showArrow: false,
    onEnter() {
      alert('Fizz')
    }
  },
]

const noop = () => {}
</script>

<Header title="Main menu" />

<PageContent>
  <List>
    {#each navigation as item}
      <ListItem
        primary={item.primary}
        secondary={item.secondary || ''}
        showArrow={item.showArrow}
        on:itemActionEnter={item.onEnter || noop} />
    {/each}
  </List>
</PageContent>

<SoftwareKey
  center="Select"
/>