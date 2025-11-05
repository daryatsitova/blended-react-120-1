type Action = { type: "increment" | "decrement"};

function reducer(state: number, action: Action): number {
  switch (action.type) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    default:
      return state;
  }
}


console.log(reducer(5, { type: "increment" })); // 6


// type Action = "increment"| "decrement";

// function reducer(state: number, action: Action): number {
//   switch (action) {
//     case "increment":
//       return state + 1;
//     case "decrement":
//       return state - 1;
//     default:
//       return state;
//   }
// }


// console.log(reducer(10, "increment"));
