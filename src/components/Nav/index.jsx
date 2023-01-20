import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { Button } from "../Button";
import { Logo } from "../Logo";
import { NavTag } from "./styles";

export const Nav = ({ button, textButton, page }) => {
  const { logOut } = useContext(UserContext);

  return (
    <NavTag button={button} page={page}>
      <Logo />
      {textButton ? (
        <Button
          type="button"
          typeButton="default"
          func={logOut}
          text={textButton}
        />
      ) : null}
    </NavTag>
  );
};
