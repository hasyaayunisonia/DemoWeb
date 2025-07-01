// services/authService.ts
export const loginUser = async (
  username: string,
  password: string
): Promise<string> => {
  // Simulasi API call
  return `token-for-${username}-${password}`;
};
