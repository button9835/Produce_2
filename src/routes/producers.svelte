<script>
  import { pre_break_values } from "./mainLogic";
</script>

<div class="producers-container">
  <div class="pdr" style="border-color: coral;">
    <p style="font-size: 20px; margin-top: 0;">생산기 1</p>
    <p class="pdr_data" title="{pre_break_values.pdrs[0].purchase_count}개 구매함">개수 : {pre_break_values.pdrs[0].amount}</p>
    <p class="pdr_data">배율 : {pre_break_values.pdrs[0].mult}</p>
    <button id="buy_pdr1" onclick={() => buyPdr(0)}>가격 : {pre_break_values.pdrs[0].price}</button>
  </div>

  <div class="pdr" style="border-color: yellow;">
    <p style="font-size: 20px; margin-top: 0;">생산기 2</p>
    <p class="pdr_data" title="{pre_break_values.pdrs[1].purchase_count}개 구매함">개수 : {pre_break_values.pdrs[1].amount}</p>
    <p class="pdr_data">배율 : {pre_break_values.pdrs[1].mult}</p>
    <button id="buy_pdr2">가격 : {pre_break_values.pdrs[1].price}</button>
  </div>

  <div class="pdr" style="border-color: lime;">
    <p style="font-size: 20px; margin-top: 0;">생산기 3</p>
    <p class="pdr_data" title="{pre_break_values.pdrs[2].purchase_count}개 구매함">개수 : {pre_break_values.pdrs[2].amount}</p>
    <p class="pdr_data">배율 : {pre_break_values.pdrs[2].mult}</p>
    <button id="buy_pdr3">가격 : {pre_break_values.pdrs[2].price}</button>
  </div>

  <div class="pdr" style="border-color: aqua;">
    <p style="font-size: 20px; margin-top: 0;">생산기 4</p>
    <p class="pdr_data" title="{pre_break_values.pdrs[3].purchase_count}개 구매함">개수 : {pre_break_values.pdrs[3].amount}</p>
    <p class="pdr_data">배율 : {pre_break_values.pdrs[3].mult}</p>
    <button id="buy_pdr4">가격 : {pre_break_values.pdrs[3].price}</button>
  </div>
</div>

<style>
  .producers-container {
    display: flex; /* 자식 요소들을 가로로 배치 */
    
    gap: 10px; /* 요소들 사이에 간격 추가 */
  }
  
  .pdr {
    border: solid 2px;
    padding: 5px;
    flex: 1;
  }
  .pdr_data {
    margin:3px;
  }
</style>