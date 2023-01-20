import { FigureLogo, ImgLogo } from "./styles";
import logo from "../../img/Logo.png";

export const Logo = () => {
  return (
    <FigureLogo>
      <ImgLogo src={logo} alt="" />
    </FigureLogo>
  );
};
