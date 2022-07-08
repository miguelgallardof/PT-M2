const redux = require('redux');
//console.log(redux)

const createStore = redux.createStore;
//console.log('CREATE STORE', createStore);

//Constantes con los tipos de acción:
const ADD_TODO = 'ADD_TODO';
const REMOVE_TODO = 'REMOVE_TODO';

//Estado Inicial Global
const initialState = {
  todos: [] // []
}

//REDUCER
const reducer = (state = initialState, action) => {
  //console.log(state)
  switch(action.type) {
    case ADD_TODO: 
      return {
        todos: [...state.todos, action.payload]
      }
    case REMOVE_TODO:
      return {
        todos: state.todos.filter((t, i) => i !== action.payload)
      }
  }
} 

// [e1, e2, e3].map() --> [o1, o2, o3]
// [e1, e2, e3].filter(0) --> [e2, e3] 
// [manzana, manzana, banana] --> [manzana, manzana]

//Action creator
function addTodo(text) {
  return {
    type: ADD_TODO,
    payload: text //data 
  }
}

function removeTodo(index) {
  return {
    type: REMOVE_TODO,
    payload: index //data
  }
}


// const unsubscribe = store.subscribe(() => {
//   console.log('wan')
// })
//console.log('UNSUBSCRIBE', unsusbcribe)

store.dispatch(addTodo('Hacer el homework'))
store.dispatch(addTodo('Cenar'))



//STORE
const store = createStore(reducer)
//console.log('STORE: ', store)

//Método que retorna el llamado subscribe y me permite desuscribirme de los cambios del store
unsubscribe()

store.dispatch(removeTodo(1))
store.dispatch(addTodo('Ver la lecture'))

console.log(store.getState())