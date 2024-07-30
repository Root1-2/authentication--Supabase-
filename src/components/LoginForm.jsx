import { useState } from "react";
import { useLogin } from "../services/useLogin";
import styled from "styled-components";
import SpinnerMini from "../components/SpinnerMini";

const Form = styled.form`
  padding: 2.4rem 4rem;
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Input = styled.input`
  border: 1px solid var(--color-grey-300);
  background-color: var(--color-grey-0);
  border-radius: var(--border-radius-sm);
  box-shadow: var(--shadow-sm);
  padding: 0.8rem 1.2rem;
`;

const Button = styled.button`
  font-size: 1.2rem;
  padding: 0.4rem 0.8rem;
  margin-top: 2rem;
  text-transform: uppercase;
  font-weight: 600;
  text-align: center;
  color: var(--color-brand-50);
  background-color: var(--color-brand-600);

  &:hover {
    background-color: var(--color-brand-700);
  }
`;

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, isPending } = useLogin();

  function handleSubmit(e) {
    e.preventDefault();

    if (!email || !password) return;

    login(
      { email, password },
      {
        onSettled: () => {
          setEmail("");
          setPassword("");
        },
      }
    );
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="email"
        id="email"
        disabled={isPending}
        autoComplete="username"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email Address"
      />
      <br></br>

      <Input
        type="password"
        id="password"
        autoComplete="current-password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        disabled={isPending}
        placeholder="Password"
      />

      <Button size="large" disabled={isPending}>
        {!isPending ? "Log In" : <SpinnerMini />}
      </Button>
    </Form>
  );
}

export default LoginForm;
