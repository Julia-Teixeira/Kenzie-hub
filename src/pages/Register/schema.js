import * as yup from "yup";

export const SchemaRegister = yup.object().shape({
  name: yup.string().required("O campo Nome é obrigatório!"),
  email: yup
    .string()
    .required("Campo e-mail obrigatório")
    .email("E-mail inválido"),
  password: yup
    .string()
    .required("Campo senha obrigatório")
    .min(8, "A senha precisa conter pelo menos 8 caracteres!")
    .matches(/(?=.*?[A-Za-z])/, "A senha precisa conter letras")
    .matches(/(?=.*?[0-9])/, "A senha precisa conter números")
    .matches(
      /(?=.*?[#?!@$%^&*-])/,
      "A senha precisa conter pelo menos um caracter especial"
    ),

  confirmPassword: yup
    .string()
    .required("Confirmar senha é obrigatório")
    .oneOf([yup.ref("password")], "As senhas não coincidem!"),
  contact: yup.string().required("O campo Contato é obrigatório!"),
  course_module: yup.string().required("O campo Módulo é obrigatório!"),
});
