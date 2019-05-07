import { IUser } from "./common/auth/auth.service";

export interface IEvents {
    id: number;
    name: string;
    isCompleted: boolean;
    dateCompleted: Date;
    userId: number;
    orderId: number;
    user?: IUser;
}
