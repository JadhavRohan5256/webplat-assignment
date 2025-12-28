import { User } from '../../shared/models/dashboard.model';

export interface DashboardState {
    user: User | null;
    status: 'pending' | 'loading' | 'success' | 'error';
    error: string | null;
}

export const initialDashboardState: DashboardState = {
    user: null,
    status: 'pending',
    error: null
};
