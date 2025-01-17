export interface AuthTokenAttr {
    username: string;
    password: string;
}
export interface RefreshTokenAttr {
    refresh_token: string;
}
export interface RevokeTokenAttr {
    token: string;
}
export interface AuthTokenParams {
    username: string;
    password: string;
    grant_type: 'password';
}
export interface RefreshTokenParams {
    refresh_token: string;
    grant_type: 'refresh_token';
}
export interface RevokeTokenParams {
    token: string;
}
