import { Loading } from "../Loading";
import { ButtonForm } from "./styles";

export const Button = ({
  type,
  text,
  func,
  typeButton,
  disabled,
  loading,
  children,
  id,
  page,
}) => {
  return (
    <ButtonForm
      id={id}
      type={type}
      typeButton={typeButton}
      onClick={func ? () => func() : null}
      disabled={disabled}
      page={page}
    >
      {loading === true ? (
        <Loading type={"bubbles"} color={"var(--color-grey-0)"} />
      ) : (
        text
      )}
      {children}
    </ButtonForm>
  );
};
