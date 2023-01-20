import { FormStyle, FormTitle } from "./styles";

export const Form = ({ title, children, func, padding }) => {
  return (
    <FormStyle onSubmit={func} noValidate padding={padding}>
      {title ? <FormTitle>{title}</FormTitle> : null}
      {children}
    </FormStyle>
  );
};
