import { useState } from "react";
import { useLogin } from "../services/useLogin";
import { NavLink } from "react-router-dom";

import SpinnerMini from "../components/SpinnerMini";
import Form from "../ui/Form";
import Input from "../ui/Input";
import Button from "../ui/Button";
import FormRowVertical from "../ui/FormRowVertical";

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
      <FormRowVertical label="Email address">
        <Input
          type="email"
          id="email"
          disabled={isPending}
          // This makes this form better for password managers
          autoComplete="username"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </FormRowVertical>
      <FormRowVertical label="Password">
        <Input
          type="password"
          id="password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          disabled={isPending}
        />
      </FormRowVertical>
      <p>
        Don&apos;t Have an Account?{" "}
        <span>
          <NavLink to="/signup">SignUp</NavLink>
        </span>
      </p>
      <FormRowVertical>
        <Button size="large" disabled={isPending}>
          {!isPending ? "Log In" : <SpinnerMini />}
        </Button>
      </FormRowVertical>
    </Form>
  );
}

export default LoginForm;
