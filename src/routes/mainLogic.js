import { start, stop, setOnTick } from "./tick";

export let pre_break_values = {
  resource: 0,
  pdrs: [
    { amount: 10, mult: 0.1, price: 10, purchase_count: 0 },
    { amount: 5,  mult: 0.2, price: 100, purchase_count: 0 },
    { amount: 1,  mult: 0.3, price: 10000, purchase_count: 0 },
    { amount: 0.5,mult: 0.4, price: 100000000, purchase_count: 0 }
  ]
};

//표기법 변환 함수
function display(value) {
  if (value < 10) {
    return value.toFixed(2);
  }
  else if (value < 1000) {
    return value.toFixed(1);
  }
  else {
    return value.toExponential(0);
  }
}

function update() {
  pre_break_values.resource += (pre_break_values.pdrs[0].amount * pre_break_values.pdrs[0].mult) / 60;
  for (const pdr of pre_break_values.pdrs) {
    pdr.amount += pdr.amount * pdr.mult;
  }
}

export function initializeMainLogic() {
  setOnTick(update);
  start();
}

export function cleanupMainLogic() {
  stop();
}