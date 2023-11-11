export const initialState = {
  message: "Hello F8",
  todo2: ["Item1", "Item2", "Item3", "Item4"],
};
export const rootReducer = (state, action) => {
  switch (action.type) {
    case "todo/app": {
      return { ...state, todo2: [...state.todo2, action.payload] };
    }
    default: {
      return state;
    }
  }
};
