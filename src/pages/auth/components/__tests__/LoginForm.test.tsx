// __tests__/LoginForm.test.tsx
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import LoginForm from "../LoginFormOri";
import * as authService from "../../../../services/authService";

jest.mock("../../../../services/authService");

describe("LoginForm", () => {
  const mockLoginUser = authService.loginUser as jest.Mock;

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("renders input fields and button", () => {
    render(<LoginForm />);
    expect(screen.getByLabelText(/Username/i)).toBeInTheDocument(); // Render test
    expect(screen.getByLabelText(/Password/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /Login/i })).toBeInTheDocument();
  });

  test("shows validation errors when fields are empty", async () => {
    render(<LoginForm />);
    fireEvent.click(screen.getByRole("button", { name: /Login/i }));

    await waitFor(() => {
      expect(screen.getByText(/Username is required/i)).toBeInTheDocument();
      expect(screen.getByText(/Password is required/i)).toBeInTheDocument();
    });
  });

  test("calls loginUser and onSuccess when form is submitted correctly", async () => {
    mockLoginUser.mockResolvedValue("fake-token");
    const onSuccessMock = jest.fn();

    render(<LoginForm onSuccess={onSuccessMock} />);

    fireEvent.change(screen.getByLabelText(/Username/i), {
      target: { value: "hasya" },
    });
    fireEvent.change(screen.getByLabelText(/Password/i), {
      target: { value: "1234" },
    });

    fireEvent.click(screen.getByRole("button", { name: /Login/i }));

    await waitFor(() => {
      expect(mockLoginUser).toHaveBeenCalledWith("hasya", "1234"); // Props test
      expect(onSuccessMock).toHaveBeenCalledWith("fake-token"); // Callback test
    });
  });
});
