<script>
  import { game, display } from '$lib/game.js';
  import Producers from './producers.svelte';
  import Prestige12 from './prestige_1&2.svelte';
  import Automation from './automation.svelte';

  let currentTab = 'producers';
</script>

<p class="mainResource"> 자원 : {display($game.resource)}</p>

<div class="tabs">
  <button on:click={() => currentTab = 'producers'}>생산기</button>
  <button on:click={() => currentTab = 'automation'}>자동화</button>
</div>

{#if currentTab === 'producers'}
<Producers />
<Prestige12 />
{:else if currentTab === 'automation'}
<Automation />
{/if}

<style>
  .tabs {
    margin:3px;
  }
  button {
    margin-right: 0.5em;
    width: 100px;
    height: 50px;
    border-radius: 0;
  }
</style>