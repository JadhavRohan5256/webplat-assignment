import { ActionReducerMap } from '@ngrx/store';
import { AuthState } from './auth/auth.state';
import { UsersState } from './users/users.state';
import { ProductsState } from './products/products.state';
import { DashboardState } from './dashboard/dashboard.state';
import { authReducer } from './auth/auth.reducer';
import { usersReducer } from './users/users.reducer';
import { productsReducer } from './products/products.reducer';
import { dashboardReducer } from './dashboard/dashboard.reducer';

export interface AppState {
    auth: AuthState;
    users: UsersState;
    products: ProductsState;
    dashboard: DashboardState;
}

export const reducers: ActionReducerMap<AppState> = {
    auth: authReducer,
    users: usersReducer,
    products: productsReducer,
    dashboard: dashboardReducer
};
