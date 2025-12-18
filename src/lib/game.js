//@ts-nocheck
import { writable } from 'svelte/store';

const initialState = {
  resource: 10,
  pdrs: [
    { amount: 0, mult: 1, price: 10, purchase_count: 0 },
    { amount: 0, mult: 1, price: 100, purchase_count: 0 },
    { amount: 0, mult: 1, price: 10000, purchase_count: 0 },
    { amount: 0, mult: 1, price: 100000000, purchase_count: 0 }
  ],
  prestige1_req : 1e+15,
  prestige1_eff : 1,
  p2_unlocked: false,
  prestige2_req: 3,
  p1_exp_base: 1.05,
  lastUpdate: Date.now()
};

const initialPdrState = JSON.parse(JSON.stringify(initialState.pdrs));

function createGameStore() {
  const { subscribe, update: updateStore } = writable(initialState);

  let animationFrameId;

  function gameLoop() {
    updateStore(state => {
      const now = Date.now();
      const delta = (now - state.lastUpdate) / 1000;
      
      const newState = { ...state };
      newState.lastUpdate = now;

      newState.resource += newState.pdrs[0].amount * newState.pdrs[0].mult * delta;

      for (let i = 0; i < newState.pdrs.length - 1; i++) {
        const producer = newState.pdrs[i + 1];
        newState.pdrs[i].amount += producer.amount * producer.mult * delta;
      }
      
      return newState;
    });
    animationFrameId = window.requestAnimationFrame(gameLoop);
  }

  if (typeof window !== 'undefined') {
    gameLoop();
  }

  return {
    subscribe,
    buyPdr: (index) => updateStore(state => {
      if (state.pdrs[index].price <= state.resource) {
        const newState = { ...state };
        newState.resource -= newState.pdrs[index].price;
        newState.pdrs[index].purchase_count++;
        newState.pdrs[index].amount++;
        if (newState.pdrs[index].purchase_count%10 == 0) {
          switch (index) {
            case 0:
              newState.pdrs[index].price *= 10;
              break;
            case 1:
              newState.pdrs[index].price *= 100;
              break;
            case 2:
              newState.pdrs[index].price *= 10000;
              break;
            case 3:
              newState.pdrs[index].price *= 100000000;
              break;
          }
          newState.pdrs[index].mult *= (2 * state.prestige1_eff);
        }
        return newState;
      }
      return state;
    }),
    buyUntilNext10: (index) => updateStore(state => {
      const pdr = state.pdrs[index];
      const N = 10 - (pdr.purchase_count % 10);
      const { totalCost, finalPrice, multIncrease, canAfford } = calculateBuyNInfo(pdr, state.resource, state.prestige1_eff, index, N);

      if (!canAfford) {
        return state;
      }

      const newState = { ...state };
      newState.resource -= totalCost;
      newState.pdrs[index].purchase_count += N;
      newState.pdrs[index].amount += N;
      newState.pdrs[index].price = finalPrice;
      newState.pdrs[index].mult *= multIncrease;

      return newState;
    }),
    doPrestige1: () => updateStore(state => {
      if (state.resource >= state.prestige1_req) {
        const newState = {
          ...state,
          resource: initialState.resource,
          pdrs: JSON.parse(JSON.stringify(initialPdrState)),
          prestige1_req: state.prestige1_req ** 1.5,
        };
        if (newState.p2_unlocked) {
          newState.prestige1_eff **= newState.p1_exp_base;
        } else {
          newState.prestige1_eff *= 1.25;
        }
        return newState;
      }
      return state;
    }),
    doPrestige2: () => updateStore(state => {
      if (state.prestige1_eff >= state.prestige2_req) {
        const newState = {
          ...state,
          resource: initialState.resource,
          pdrs: JSON.parse(JSON.stringify(initialPdrState)),
          prestige1_req: initialState.prestige1_req,
          prestige1_eff: 1,
          prestige2_req: state.prestige2_req ** 1.1,
        };
        if (newState.p2_unlocked) { // Subsequent P2
          newState.p1_exp_base += 0.05;
        } else { // First P2
          newState.p2_unlocked = true;
        }
        return newState;
      }
      return state;
    })
  };
}

export const game = createGameStore();

export function calculateBuyNInfo(pdr, resource, prestige1_eff, index, N) {
  let tempPdr = JSON.parse(JSON.stringify(pdr));
  let totalCost = 0;
  let multIncrease = 1;

  for (let i = 0; i < N; i++) {
    totalCost += tempPdr.price;
    tempPdr.purchase_count++;

    if (tempPdr.purchase_count % 10 === 0) {
      switch (index) {
        case 0:
          tempPdr.price *= 10;
          break;
        case 1:
          tempPdr.price *= 100;
          break;
        case 2:
          tempPdr.price *= 10000;
          break;
        case 3:
          tempPdr.price *= 100000000;
          break;
      }
      multIncrease *= (2 * prestige1_eff);
    }
  }

  const canAfford = resource >= totalCost;
  return { totalCost, finalPrice: tempPdr.price, multIncrease, canAfford };
}

export function display(value) {
  if (value < 10) {
    return value.toFixed(2).toString();
  }
  else if (value < 1000) {
    return value.toFixed(1).toString();
  }
  else {
    return value.toExponential(2).toString();
  }
}

export function displayInt(value) {
  const roundedValue = Math.floor(value);
  if (roundedValue < 1000) {
    return roundedValue.toString();
  } else {
    return roundedValue.toExponential(2).toString();
  }
}