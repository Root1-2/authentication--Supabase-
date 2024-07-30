import { HiArrowRightOnRectangle } from "react-icons/hi2";
import { useLogout } from "../services/useLogout";
import styled from "styled-components";
import SpinnerMini from "../components/SpinnerMini";

const ButtonIcon = styled.button`
  background: none;
  border: none;
  padding: 1rem;
  border-radius: var(--border-radius-sm);
  transition: all 0.2s;

  &:hover {
    background-color: var(--color-grey-100);
  }

  & svg {
    width: 5rem;
    height: 5rem;
    color: var(--color-brand-600);
  }
`;

function Logout() {
  const { logout, isPending } = useLogout();

  return (
    <ButtonIcon disabled={isPending} onClick={logout}>
      {!isPending ? <HiArrowRightOnRectangle /> : <SpinnerMini />}
    </ButtonIcon>
  );
}

export default Logout;
