<script>
  import { game, display } from '$lib/game.js';
  import Producers from './producers.svelte';
</script>

<p class="mainResource"> 자원 : {display($game.resource)}</p>

<Producers />
