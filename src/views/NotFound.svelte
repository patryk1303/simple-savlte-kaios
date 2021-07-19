<script>
  import router from 'page'
  
  import Header from "../components/Header.svelte"
  import SoftwareKey from "../components/SoftwareKey.svelte"
  import PageContent from '../components/PageContent.svelte'
  </script>
    
    <Header title="Not found" />
    
    <PageContent>
      <p class="px-2 py-4">
        Not found
      </p>
    </PageContent>
    
    <SoftwareKey
      on:itemActionLeft={() => router('/')}
      left="Back"
    />