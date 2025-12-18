import { writable } from 'svelte/store';

const initialState = {
  resource: 10,
  pdrs: [
    { amount: 0, mult: 1, price: 10, purchase_count: 0 },
    { amount: 0, mult: 1, price: 100, purchase_count: 0 },
    { amount: 0, mult: 1, price: 10000, purchase_count: 0 },
    { amount: 0, mult: 1, price: 100000000, purchase_count: 0 }
  ],
  lastUpdate: Date.now()
};

function createGameStore() {
  const { subscribe, update: updateStore } = writable(initialState);

  let animationFrameId;

  function gameLoop() {
    updateStore(state => {
      const now = Date.now();
      const delta = (now - state.lastUpdate) / 1000; // delta in seconds
      
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
        return newState;
      }
      return state;
    })
  };
}

export const game = createGameStore();

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