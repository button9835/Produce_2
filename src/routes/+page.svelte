<script>
  import { game, display } from '$lib/game.js';
  import Producers from './producers.svelte';
  import Prestige12 from './prestige_1&2.svelte';
</script>

<p class="mainResource"> 자원 : {display($game.resource)}</p>

<Producers />

<Prestige12 />