import LoginForm from "."
import { test, expect, vi } from "vitest"
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"

test("render the login form renders", () => {
  render(<LoginForm onSubmit={() => { }} />)
  expect(screen.getByLabelText("Email:")).toBeInTheDocument()
  expect(screen.getByLabelText("Password:")).toBeInTheDocument()
  expect(screen.getByRole('button', { name: /login/i })).toBeInTheDocument()
})

test('displays error when fields are error', async () => {
  render(<LoginForm onSubmit={() => { }} />)

  await screen.getByRole("button", { name: /login/i }).click()

  expect(screen.queryByText("All fields are required")).toBeInTheDocument()
})

test('calls onSubit ith the right values', async () => {
  const handleSubmit = vi.fn()
  render(<LoginForm onSubmit={handleSubmit} />)

  await userEvent.type(screen.getByLabelText("Email:"), "test@test.com")
  await userEvent.type(screen.getByLabelText("Password:"), "123456")
  await userEvent.click(screen.getByRole("button", { name: /login/i }))

  expect(handleSubmit).toHaveBeenCalled()
  expect(handleSubmit).toHaveBeenCalledTimes(1)
  expect(handleSubmit).toHaveBeenCalledWith({ email: "test@test.com", password: "123456" })
})