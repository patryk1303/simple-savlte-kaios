<script>
import Header from "../components/Header.svelte"
import SoftwareKey from "../components/SoftwareKey.svelte"

import router from 'page'
import PageContent from '../components/PageContent.svelte'
</script>
  
  <Header title="About" />
  
  <PageContent>
    <p class="px-2 py-4">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis omnis nobis libero esse odit non officia laborum consequuntur dolores, praesentium, sed quas dolor culpa animi. Libero saepe ipsam magni deserunt.
    </p>
  </PageContent>
  
  <SoftwareKey
    on:itemActionLeft={() => router('/')}
    left="Back"
  />