export const AuthMessage = {
  UserExists: (email: string): string => `User with email ${email} already exists`,
  UserNotFound: (email: string): string => `User with email ${email} not found`,
  PasswordIncorrect: () => 'Password is incorrect'
} as const;
