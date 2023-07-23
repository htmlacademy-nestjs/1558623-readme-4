export const AuthMessage = {
  UserExists: (email: string): string => `User with email ${email} already exists`,
  UserNotFoundByEmail: (email: string): string => `User with email ${email} not found`,
  UserNotFoundById: (id: string): string => `User with id ${id} not found`,
  PasswordIncorrect: () => 'Password is incorrect'
} as const;
