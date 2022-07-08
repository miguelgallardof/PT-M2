const initialState = {
  count: 1,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case "add":
      return Object.assign(state, { count: state.count + 1 });
    default:
      return state;
  }
}

var objA = {
  prop: "value",
};

var objB = {
  a: "a",
  obj: objA,
};

var newObj = JSON.parse(JSON.stringify(objB));

console.log(newObj.obj === objA);
