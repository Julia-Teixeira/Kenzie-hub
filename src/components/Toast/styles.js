import styled from "styled-components";
import { ToastContainer } from "react-toastify";

export const StyledContainer = styled(ToastContainer)`
  .Toastify__progress-bar--success {
    background: var(--feedback-sucess);
  }
  .Toastify__progress-bar--error {
    background: var(--feedback-negative);
  }
  .Toastify__toast {
    background: var(--color-grey-2);
  }
  .Toastify__toast-body {
    color: var(--color-grey-0);
    font-weight: 700;
    font-size: 14px;
  }
  .Toastify__close-button > svg {
    color: var(--color-grey-1);
  }
`;
