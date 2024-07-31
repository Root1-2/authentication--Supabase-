import styled from "styled-components";
import LoginForm from "../components/LoginForm";
import SignupForm from "../components/SignUpForm";

const SignUpLayout = styled.main`
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

function SignUp() {
  return (
    <SignUpLayout>
      <Heading as="h3">Log In to your Account</Heading>
      <SignupForm />
    </SignUpLayout>
  );
}

export default SignUp;
