export default function createStore(reducer) {
  let state;
  let x = {
    getState: () => {return state;},
    dispatch: (action) => {state = reducer(state, action); render();}
  }

  x.dispatch({type: '@@INIT'})

  return x
}



function render() {
  const container = document.getElementById('container');
}
