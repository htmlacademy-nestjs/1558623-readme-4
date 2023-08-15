export const ErrorMessage = {
  FileDoesNotExist: (id: string): string => `File with id ${id} does not exist`,
} as const;
