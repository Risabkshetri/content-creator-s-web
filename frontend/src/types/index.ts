export interface User {
  id: string;
  username: string;
  email: string;
  // Add other user properties as needed
}

export interface AuthResponse {
  user: User;
  accessToken: string;
  refreshToken: string;
}

export interface TokenResponse {
  accessToken: string;
  refreshToken: string;
}