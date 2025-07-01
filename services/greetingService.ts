// services/greetingService.ts
export const fetchGreeting = async (name: string): Promise<string> => {
  // Normally you'd call API here
  return `Hello, ${name}!`;
};
