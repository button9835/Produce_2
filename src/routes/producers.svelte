<script>
  import { break_pre_values } from "./mainLogic";
</script>

<div class="producers-container">
  <div class="pdr" style="border-color: coral;">
    <p style="font-size: 20px; margin-top: 0;">생산기 1</p>
    <p class="pdr_data" title="{break_pre_values.pdr1.amount_cl}개 구매함">개수 : {break_pre_values.pdr1.amount}</p>
    <p class="pdr_data">배율 : {break_pre_values.pdr1.mult}</p>
    <button id="buy_pdr1">가격 : {break_pre_values.pdr1.price}</button>
  </div>

  <div class="pdr" style="border-color: yellow;">
    <p style="font-size: 20px; margin-top: 0;">생산기 2</p>
    <p class="pdr_data" title="{break_pre_values.pdr2.amount_cl}개 구매함">개수 : {break_pre_values.pdr2.amount}</p>
    <p class="pdr_data">배율 : {break_pre_values.pdr2.mult}</p>
    <button id="buy_pdr2">가격 : {break_pre_values.pdr2.price}</button>
  </div>

  <div class="pdr" style="border-color: lime;">
    <p style="font-size: 20px; margin-top: 0;">생산기 3</p>
    <p class="pdr_data" title="{break_pre_values.pdr3.amount_cl}개 구매함">개수 : {break_pre_values.pdr3.amount}</p>
    <p class="pdr_data">배율 : {break_pre_values.pdr3.mult}</p>
    <button id="buy_pdr3">가격 : {break_pre_values.pdr3.price}</button>
  </div>

  <div class="pdr" style="border-color: aqua;">
    <p style="font-size: 20px; margin-top: 0;">생산기 4</p>
    <p class="pdr_data" title="{break_pre_values.pdr4.amount_cl}개 구매함">개수 : {break_pre_values.pdr4.amount}</p>
    <p class="pdr_data">배율 : {break_pre_values.pdr4.mult}</p>
    <button id="buy_pdr4">가격 : {break_pre_values.pdr4.price}</button>
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