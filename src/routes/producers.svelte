<script>
  import { game, display, displayInt, calculateBuyNInfo } from '$lib/game.js';
  let isShiftPressed = false;
</script>

<svelte:window
  on:keydown={(e) => {
    if (e.key === 'Shift') {
      isShiftPressed = true;
    }
  }}
  on:keyup={(e) => {
    if (e.key === 'Shift') {
      isShiftPressed = false;
    }
  }}
/>

<div style="display: flex;">
  {#each $game.pdrs as pdr, index}
    {@const N = 10 - (pdr.purchase_count % 10)}
    <div class="producer" style="border: solid 2px; border-color: {index % 4 === 0 ? 'coral' : index % 4 === 1 ? 'yellow' : index % 4 === 2 ? 'lime' : 'aqua'}; flex: 1; padding: 5px; margin: 5px;">
      <p style="font-size: 20px; margin-top: 0;">생산기 {index + 1}</p>
      {#if isShiftPressed}
        <p class="pdr_data">구매한 횟수: {displayInt(pdr.purchase_count)}</p>
      {:else}
        <p class="pdr_data" title="{displayInt(pdr.purchase_count)}개 구매함">수량: {displayInt(pdr.amount)}</p>
      {/if}
      <p class="pdr_data">배율: {display(pdr.mult)}</p>
      {#if isShiftPressed}
        <p class="pdr_data">다음 {N}개 가격: {display(calculateBuyNInfo(pdr, $game.resource, $game.prestige1_eff, index, N).totalCost)}</p>
      {:else}
        <p class="pdr_data" title="다음 {N}개 가격: {display(calculateBuyNInfo(pdr, $game.resource, $game.prestige1_eff, index, N).totalCost)}">가격: {display(pdr.price)}</p>
      {/if}
        <div style="display: flex;">
        <button
          class="buyButton"
          style="background-color: {$game.resource >= pdr.price ? 'lime' : 'gray'}; cursor: {$game.resource >= pdr.price ? 'pointer' : 'default'}; width:100%"
          on:click={() => game.buyPdr(index)}>1개 구매</button>
        <button
          class="buyButton"
          style="background-color: {calculateBuyNInfo(pdr, $game.resource, $game.prestige1_eff, index, N).canAfford ? 'lime' : 'gray'}; cursor: {calculateBuyNInfo(pdr, $game.resource, $game.prestige1_eff, index, N).canAfford ? 'pointer' : 'default'}; width:100%"
          on:click={() => game.buyUntilNext10(index)}>다음 가격까지 {N}개 구매</button>
      </div>
    </div>
  {/each}
</div>

<style>
  .pdr_data {
    margin: 5px;
  }
  .buyButton {
    flex : 1;
  }
</style>