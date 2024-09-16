export type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
}

export type UserStatus = 'idle' | 'loading' | 'succeeded' | 'failed';

export type UserError = string | null;

export type SearchName = 'none'| 'name' | 'username' | 'email' | 'phone';

export type UsersInitialState = {
  users: User[];
  status: UserStatus;
  error: UserError;
  searchName: SearchName;
  searchText: string;
}