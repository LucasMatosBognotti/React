import produce from 'immer';

const INITIAL_STATE = {
  item: null,
};

export default function item(state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@auth/ITEM_SUCCESS':
      return produce(state, draft => {
        draft.item = action.payload.user_id;
      });
    default:
      return state;
  }
}