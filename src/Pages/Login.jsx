import styled from "styled-components";
import LoginForm from "../components/LoginForm";

const LoginLayout = styled.main`
  height: 100vh;
  align-content: center;
  justify-content: center;
  gap: 3.2rem;
  background-color: var(--color-grey-50);
`;

const Heading = styled.h2`
  font-size: 2.5rem;
  font-weight: 500;
  text-align: center;
`;

function Login() {
  return (
    <LoginLayout>
      <Heading as="h3">Log In to your Account</Heading>
      <LoginForm />
    </LoginLayout>
  );
}

export default Login;
