import { TEST_ACTION_TYPE } from '../actions/types';

const initialState = {
  data: '',
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case TEST_ACTION_TYPE:
      return { ...state, data: action.payload };
    default:
      return state;
  }
};

export default rootReducer;
