
export let break_pre_values = {
  resource : 0,
  pdr1 : {
    amount : 0,
    mult : display(1),
    price : display(10),
    amount_cl : 0
  },
  pdr2 : {
    amount : 0,
    mult : display(1),
    price : display(100),
    amount_cl : 0
  },
  pdr3 : {
    amount : 0,
    mult : display(1),
    price : display(10000),
    amount_cl : 0
  },
  pdr4 : {
    amount : 0,
    mult : display(1),
    price : display(100000000),
    amount_cl : 0
  },
}

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