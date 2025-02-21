export type User = {
  id: string;
  username: string;
  password: string;
  email: string;
};

export type UserDTO = {
  email: string;
  password: string;
};

export type CreateUserDTO = {
  email: string;
  password: string;
};
