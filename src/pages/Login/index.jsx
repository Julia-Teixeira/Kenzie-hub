import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { SchemaLogin } from "./schema";
import { Navigate, useNavigate } from "react-router-dom";
import { Input } from "../../components/Input";
import { Form } from "../../components/Form";
import { Button } from "../../components/Button";
import { DivLogin, SpanLogin } from "./styles";
import { Nav } from "../../components/Nav";
import { StyledContainer } from "../../components/Toast/styles";
import { motion } from "framer-motion";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";

export const Login = () => {
  const { loading, logIn, user } = useContext(UserContext);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(SchemaLogin),
  });

  return user ? (
    <Navigate to="/dashboard" />
  ) : (
    <motion.div
      initial={{ x: "-1000px", opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: "-1000px", opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <section>
        <Nav button={false} />
        <Form title="Login" func={handleSubmit(logIn)}>
          <Input
            label="E-mail"
            type="email"
            placeholder="Digite seu e-mail"
            register={register("email")}
            message={errors.email?.message}
          />
          <Input
            label="Senha"
            type="password"
            placeholder="Digite sua senha"
            register={register("password")}
            message={errors.password?.message}
          />
          <Button
            type="submit"
            typeButton="submit"
            text="Entrar"
            loading={loading}
          />
          <DivLogin>
            <SpanLogin>Ainda não possui uma conta?</SpanLogin>
            <Button
              type="button"
              typeButton="button"
              text="Cadastre-se"
              func={() => navigate("/register")}
            />
          </DivLogin>
        </Form>

        <StyledContainer autoClose={1000} />
      </section>
    </motion.div>
  );
};
