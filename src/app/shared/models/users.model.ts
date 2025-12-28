import { User } from "./dashboard.model";



export interface UsersResponse {
    users: User[];
    total: number;
    skip: number;
    limit: number;
}
