import styled from "styled-components";
import Logout from "../components/Logout";

const Main = styled.main`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  gap: 5rem;
  align-items: center;
  justify-content: center;
`;

function Homepage() {
  return (
    <Main>
      <h1>Welcome</h1>
      <Logout />
    </Main>
  );
}

export default Homepage;
