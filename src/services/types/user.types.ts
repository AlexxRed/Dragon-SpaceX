export interface IUser {
  token?: string;
  _id?: number;
  name?: string;
  email?: string;
  password: string;
  repeat_password?: string;
}
