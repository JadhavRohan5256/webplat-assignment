import { LoginResponse } from '../../shared/models/auth.model';

export interface AuthState {
    user: LoginResponse | null;
    status: 'pending' | 'loading' | 'success' | 'error';
    isAuthenticated: boolean;
    error: string | null;
}

export const initialAuthState: AuthState = {
    user: null,
    status: 'pending',
    isAuthenticated: false,
    error: null
};
