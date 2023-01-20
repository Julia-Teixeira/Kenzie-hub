import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { IoCloseSharp } from "react-icons/io5";
import { TechContext } from "../../context/TechContext";
import { Button } from "../Button";
import { Form } from "../Form";
import { Input } from "../Input";
import { SelectForm } from "../Select";
import { SchemaRegisterTech } from "./schema";
import { DivButtons, DivModal, HeaderModal, SectionModal } from "./styles";

export const ModalTechRegister = () => {
  const { registerTech, loading, openModal, setOpenModal } =
    useContext(TechContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(SchemaRegisterTech),
  });

  return (
    <SectionModal>
      <DivModal>
        <HeaderModal>
          <div>
            <h2>Cadastrar Tecnologia</h2>
            <Button type="button" func={() => setOpenModal(!openModal)}>
              <IoCloseSharp color="#F8F9FA" />
            </Button>
          </div>
        </HeaderModal>
        <Form func={handleSubmit(registerTech)} padding={true}>
          <Input
            label="Nome"
            type="text"
            placeholder="Tecnologia"
            register={register("title")}
            message={errors.title?.message}
          />
          <SelectForm
            register={register("status")}
            label="Selecionar Status"
            message={errors.status?.message}
          >
            <option value="Iniciante">Iniciante</option>
            <option value="Intermediário">Intermediário</option>
            <option value="Avançado">Avançado</option>
          </SelectForm>
          <Button
            type="submit"
            typeButton="submit"
            text="Cadastrar Tecnologia"
            loading={loading}
          />
        </Form>
      </DivModal>
    </SectionModal>
  );
};

export const ModalTechEdit = () => {
  const {
    openModalModify,
    setOpenModalModify,
    deliteTech,
    tech,
    editTech,
    loading,
  } = useContext(TechContext);

  const { register, handleSubmit } = useForm({});

  return (
    <SectionModal>
      <DivModal>
        <HeaderModal>
          <div>
            <h2>Tecnologia Detalhes</h2>
            <Button
              type="button"
              func={() => setOpenModalModify(!openModalModify)}
            >
              <IoCloseSharp color="#F8F9FA" />
            </Button>
          </div>
        </HeaderModal>
        <Form padding={true} func={handleSubmit(editTech)}>
          <Input
            label="Nome"
            type="text"
            placeholder={tech.title}
            disabled={true}
          />
          <SelectForm
            register={register("status")}
            label="Selecionar Status"
            value={tech.status}
          >
            <option value="Iniciante">Iniciante</option>
            <option value="Intermediário">Intermediário</option>
            <option value="Avançado">Avançado</option>
          </SelectForm>
          <DivButtons>
            <Button
              type="submit"
              typeButton="submit"
              text="Salvar Alterações"
              loading={loading}
              disabled={loading}
              page="edit"
            />
            <Button
              type="button"
              typeButton="button"
              text="Excluir"
              loading={loading}
              disabled={loading}
              page="edit"
              func={() => deliteTech()}
            />
          </DivButtons>
        </Form>
      </DivModal>
    </SectionModal>
  );
};
