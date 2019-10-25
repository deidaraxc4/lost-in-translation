import { AnyAction } from 'redux';
import { AppState } from '../index';
import { ThunkAction as ReduxThunkAction, ThunkDispatch } from 'redux-thunk';

export enum DataFetchStatus {
    DATA_FETCH_UNSTARTED = 'DATA_FETCH_UNSTARTED',
    DATA_FETCH_SUCCEEDED = 'DATA_FETCH_SUCCEEDED',
    DATA_FETCH_PENDING = 'DATA_FETCH_PENDING',
    DATA_FETCH_FAILED = 'DATA_FETCH_FAILED',
}

export type Dispatch = ThunkDispatch<AppState, null, AnyAction>;

export type ThunkAction<R> = ReduxThunkAction<
    Promise<R>,
    AppState,
    null,
    AnyAction
>;