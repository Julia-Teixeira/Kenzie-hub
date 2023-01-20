import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { api } from "../../services/api";
import { SchemaRegister } from "./schema";
import { Form } from "../../components/Form";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { SectionRegister, SpanRegister } from "./styles";
import { SelectForm } from "../../components/Select";
import { StyledContainer } from "../../components/Toast/styles";
import { Nav } from "../../components/Nav";
import { motion } from "framer-motion";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";

export const Register = () => {
  const { loading, registerUser } = useContext(UserContext);
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    resolver: yupResolver(SchemaRegister),
    mode: "onBlur",
  });

  return (
    <motion.div
      initial={{ x: "-1000px", opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: "-1000px", opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <SectionRegister>
        <Nav button={true} textButton="Voltar" />

        <Form title="Crie sua conta" func={handleSubmit(registerUser)}>
          <SpanRegister>Rapido e grátis, vamos nessa</SpanRegister>
          <Input
            label="Nome"
            type="text"
            placeholder="Digite aqui seu nome"
            register={register("name")}
            message={errors.name?.message}
          />
          <Input
            label="Email"
            type="email"
            placeholder="Digite seu e-mail"
            register={register("email")}
            message={errors.email?.message}
          />
          <Input
            label="Senha"
            type="password"
            placeholder="Digite aqui sua senha"
            register={register("password")}
            message={errors.password?.message}
          />
          <Input
            label="Confirmar senha"
            type="password"
            placeholder="Digite novamente sua senha"
            register={register("confirmPassword")}
            message={errors.confirmPassword?.message}
          />
          <Input
            label="Bio"
            type="text"
            placeholder="Fale sobre você"
            register={register("bio")}
            message={errors.bio?.message}
          />
          <Input
            label="Contato"
            type="text"
            placeholder="Opção de contato"
            register={register("contact")}
            message={errors.contact?.message}
          />

          <SelectForm
            label="Selecionar módulo"
            register={register("course_module")}
          >
            <option value="Primeiro módulo (Introdução ao Frontend)">
              Primeiro módulo
            </option>
            <option value="Segundo módulo (Frontend Avançado)">
              Segundo módulo
            </option>
            <option value="Terceiro módulo (Introdução ao Backend)">
              Terceiro módulo
            </option>
            <option value="Quarto módulo (Backend Avançado)">
              Quarto módulo
            </option>
          </SelectForm>
          <Button
            disabled={!isValid}
            type="submit"
            typeButton="submit"
            text="Cadastrar"
            loading={loading}
          />
        </Form>
        <StyledContainer autoClose={1000} />
      </SectionRegister>
    </motion.div>
  );
};
