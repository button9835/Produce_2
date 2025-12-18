<script>
  import { game, display } from '$lib/game.js';
</script>

<div style="display: flex;">
  {#each $game.pdrs as pdr, index}
    <div class="producer" style="border: solid 2px; border-color: {index % 4 === 0 ? 'coral' : index % 4 === 1 ? 'yellow' : index % 4 === 2 ? 'lime' : 'aqua'}; flex: 1; padding: 5px; margin: 5px;">
      <p style="font-size: 20px; margin-top: 0;">생산기 {index + 1}</p>
      <p class="pdr_data" title="{pdr.purchase_count}개 구매함">수량: {display(pdr.amount)}</p>
      <p class="pdr_data">배율: {display(pdr.mult)}</p>
      <p class="pdr_data">가격: {display(pdr.price)}</p>
      <button on:click={() => game.buyPdr(index)}>구매</button>
    </div>
  {/each}
</div>

<style>
  .pdr_data {
    margin: 5px;
  }
</style>