
export interface IAuth {
  user: any | null;
  isAuthenticated: boolean;
  loading: boolean;
  error: string | null;
}

export type LoginForm = {
  username: string;
  password: string;
}

export type User = {
  // userName: string;
  accessToken: string;
}

// export interface IUser {
//   name: string;
// }

