<script>
import { Router, Route } from 'svelte-routing'
import List from '../pages/List.svelte'
import Menu from '../pages/Menu.svelte'
</script>

<Router>
  <Route path="/"  component={List} />
  <Route path="/menu/:id" let:params  >
    <Menu id={params.id} />
  </Route>
</Router>

