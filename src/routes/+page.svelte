<script>
  import { onMount, onDestroy } from 'svelte';
  import { pre_break_values, initializeMainLogic, cleanupMainLogic } from "./mainLogic";
	import Producers from './producers.svelte';

  onMount(initializeMainLogic);

  onDestroy(cleanupMainLogic);
</script>


<p class="mainResource"> 자원 : {pre_break_values.resource}</p>

<Producers />
