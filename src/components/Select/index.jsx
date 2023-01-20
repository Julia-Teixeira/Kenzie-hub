import { Select } from "./styles";
import { Fieldset, FieldsetLegend } from "../Input/styles";

export const SelectForm = ({ register, children, label, disabled, value }) => {
  return (
    <Fieldset>
      <FieldsetLegend>{label}</FieldsetLegend>
      <Select
        {...register}
        disabled={disabled ? disabled : false}
        defaultValue={value}
      >
        {children}
      </Select>
      ;
    </Fieldset>
  );
};
