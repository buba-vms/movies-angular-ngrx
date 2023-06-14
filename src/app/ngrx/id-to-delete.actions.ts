import { createAction, props } from '@ngrx/store';
export const findAllFavorites = createAction(
  '[Counter Component] set id to be delted'
);

export const saveId = createAction(
  '[id Component] Add a Favorite Movie',
  props<{ payload: string }>()
);
