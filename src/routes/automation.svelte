<script>
  import { game } from '$lib/game.js';

  function handleToggle(index) {
    game.toggleAutobuyer(index);
  }
</script>

<p style="font-size:x-large;">자동화</p>
<div style="display: flex;">
  {#each $game.autobuyers as autobuyer, i}
  <div class="autobuyer" style="border-radius:0; display:block">
    <span style="font-size:larger">생산기 {i + 1}</span>
    {#if !autobuyer.unlocked}
    <p style="margin-top: 20px;">해금 조건 : </p>
    {:else}
    <input type="checkbox" checked={autobuyer.enabled} on:change={() => handleToggle(i)} />
    {/if}
  </div>
  {/each}
</div>

<style>
  .autobuyer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.5em;
    padding: 0.5em;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
</style>
