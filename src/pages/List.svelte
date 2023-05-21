<script>
  import {Link} from 'svelte-routing'
  import axios from 'axios'
  import { onMount } from 'svelte'

  let items = Array.from({length: 20}, (_, index) => {
    return {
      id: `id-${index}`,
      title: `메뉴${index+1}`,
    }
  })


  let fakeData

  onMount( async () => {
    console.log('마운트!')
    fakeData = await fetchFake();
  })


  async function fetchFake() {
    return await axios.get('https://fakestoreapi.com/products');
  }
  
 

 
</script>


<ul>
  {JSON.stringify(fakeData)}

  {#each items as item}
    <li>
      <Link to={`/menu/${item.id}`}>{item.title}</Link>
    </li>
  {/each}
</ul>