import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify'

import api from '../../../services/api';

import { itemSuccess } from './actions';

export function* item({ payload }) {
  try {
    const { name, description } = payload;

    const response = yield call(api.post, 'item', {
      name,
      description,
    });

    const { user_id } = response.data;

    toast.success('Item adicionado com sucesso');

    yield put(itemSuccess(user_id));

  }catch (err) {
    toast.error('Falha ao tentar cadastrar o item');
  }
}

export default all([
  takeLatest('@auth/ITEM_REQUEST', item),
]);