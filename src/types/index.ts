
export type OTPPayload = {
    otp: string;
    id: string;
}

export enum UserRole {
    admin = 'admin',
    user = 'user',
}

export type CreateUserDTO = {
    email: string;
    password: string;
    role?: UserRole;
}