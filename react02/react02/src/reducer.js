export const reducer = (state, action) => {
  // action: object => chứa thông tin cần dispatch
  // type: Tên action (feature/action)
  // payload: Dữ liệu action
  switch (action.type) {
    case "counter/increment": {
      return { ...state, count2: state.count2 + action.payload };
    }
    case "counter/decrement": {
      return { ...state, count2: state.count2 - action.payload };
    }
    default: {
      return state;
    }
  }
};
