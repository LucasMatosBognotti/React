import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

export default reducers => {
  const persistedReducer = persistReducer(
    {
      key: 'lostandfound',
      storage,
      whitelist: ['auth', 'user', 'item'],
    },
    reducers
  );

  return persistedReducer;
};