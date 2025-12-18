<script>
  import { game, display } from "$lib/game";
</script>

<div style="display: flex; justify-content: space-between;">
  <button on:click={() => game.doPrestige1()} style="text-align: center; background-color: {$game.resource >= $game.prestige1_req ? 'lime' : 'gray'}; cursor: {$game.resource >= $game.prestige1_req ? 'pointer' : 'default'};"><span style="font-size: larger;">프레스티지 1</span><br>모든 생산기와 자원을 초기화하고<br>10개 구매할 때의 배율 증가량을 {$game.p2_unlocked ? '1.05제곱합니다' : '1.25배 늘립니다.'}<br>조건 : {display($game.prestige1_req)} 자원</button>
  <button on:click={() => game.doPrestige2()} style="text-align: center; background-color: {$game.prestige1_eff >= $game.prestige2_req ? 'lime' : 'gray'}; cursor: {$game.prestige1_eff >= $game.prestige2_req ? 'pointer' : 'default'};"><span style="font-size: larger;">프레스티지 2</span><br>
    {#if $game.p2_unlocked}
      모든 생산기와 자원, 프레스티지 1을 초기화하고<br>프레스티지 1의 지수 증가량을 0.05 늘립니다.<br>조건: 프레스티지 1 효과 {display($game.prestige2_req)} 이상
    {:else}
      모든 생산기와 자원, 프레스티지 1을 초기화하고<br>프레스티지 1의 효과를 지수 연산으로 바꾸며 증가량을 1.05로 바꿉니다.<br>조건: 프레스티지 1 효과 {display($game.prestige2_req)} 이상
    {/if}
  </button>
</div>