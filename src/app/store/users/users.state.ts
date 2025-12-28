import { User } from '../../shared/models/dashboard.model';

export interface UsersState {
    users: User[];
    selectedUser: User | null;
    status: 'pending' | 'loading' | 'success' | 'error';
    error: string | null;
}

export const initialUsersState: UsersState = {
    users: [],
    selectedUser: null,
    status: 'pending',
    error: null
};
