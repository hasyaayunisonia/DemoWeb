export async function loginUser(
  username: string,
  password: string
): Promise<string> {
  // Simulasi login API
  await new Promise((r) => setTimeout(r, 500));
  if (username === "admin" && password === "admin") {
    return "mocked-token-123";
  }
  throw new Error("Invalid credentials");
}
