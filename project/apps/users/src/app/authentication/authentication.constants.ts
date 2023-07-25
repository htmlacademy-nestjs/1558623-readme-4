export const AuthMessage = {
  UserExists: (email: string): string => `User with email ${email} already exists`,
  UserNotFoundByEmail: (email: string): string => `User with email ${email} not found`,
  UserNotFoundById: (id: string): string => `User with id ${id} not found`,
  PasswordIncorrect: (): string => 'Password is incorrect',
} as const;

export const UserPasswordLength = {
  Min: 3,
  Max: 12,
} as const;

export const UserNameLength = {
  Min: 3,
  Max: 50,
};

export const UserPropsExample = {
  Email: 'faker@gmail.com',
  Password: 'qwerty123',
  AvatarPath: 'user/avatar.jpg',
} as const;
