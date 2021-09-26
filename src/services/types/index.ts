import { ThunkAction } from 'redux-thunk';
import { Action, ActionCreator } from 'redux';
import initStore from '../store/store';
import { TOrderActions } from '../actions/order';
import { TIndexActions } from '../actions/index';
import { TAuthActions } from '../actions/auth';
import { TWsActions } from '../actions/ws-actions';
import { store } from '../../index';


type TApplicationActions =
| TOrderActions
| TIndexActions
| TAuthActions
| TWsActions

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ActionCreator<
ThunkAction<ReturnType, Action, RootState, TApplicationActions>
>;
