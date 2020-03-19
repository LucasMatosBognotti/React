export function itemRequest(name, description) {
  return {
    type: '@auth/ITEM_REQUEST',
    payload: { name, description },
  };
}

export function itemSuccess( user_id ) {
  return {
    type: '@auth/ITEM_SUCCESS',
    payload: { user_id },
  };
}