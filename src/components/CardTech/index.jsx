import { TechDiv, TechH3, TechLi, TechP } from "./style.js";

export const CardTech = ({ id, name, level, func }) => {
  return (
    <TechLi id={id} onClick={func}>
      <TechH3 id={id}>{name}</TechH3>
      <TechDiv id={id}>
        <TechP id={id}>{level}</TechP>
      </TechDiv>
    </TechLi>
  );
};
