import {
  Fieldset,
  FieldsetInput,
  FieldsetLegend,
  FieldsetSpan,
} from "./styles";

export const Input = ({
  label,
  type,
  placeholder,
  register,
  message,
  disabled,
}) => {
  return (
    <Fieldset>
      <FieldsetLegend>{label}</FieldsetLegend>
      <FieldsetInput
        name={label}
        type={type}
        placeholder={placeholder}
        {...register}
        disabled={disabled ? true : false}
      />
      {message ? <FieldsetSpan>{message}</FieldsetSpan> : null}
    </Fieldset>
  );
};
