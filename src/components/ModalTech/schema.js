import * as yup from "yup";

export const SchemaRegisterTech = yup.object().shape({
  title: yup.string().required("Campo nome obrigatório"),
  status: yup.string().required("Campo Status obrigatório"),
});
