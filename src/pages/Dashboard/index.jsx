import { useEffect, useState } from "react";
import { HiPlus } from "react-icons/hi";
import { Button } from "../../components/Button";
import { CardTech } from "../../components/CardTech";
import { ModalTechEdit, ModalTechRegister } from "../../components/ModalTech";
import { Nav } from "../../components/Nav";
import { StyledContainer } from "../../components/Toast/styles";
import {
  DivContainer,
  HeaderDashboard,
  SectionDashboard,
  SectionTechDashboard,
  UlTechDashboard,
} from "./styles";
import { motion } from "framer-motion";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { TechContext } from "../../context/TechContext";
import { Navigate } from "react-router-dom";

export const Dashboard = () => {
  const { user, getUser } = useContext(UserContext);
  const {
    techList,
    setTechList,
    openModal,
    setOpenModal,
    openModalModify,
    openModalEditFunc,
  } = useContext(TechContext);

  useEffect(() => {
    getUser();
    return () => {
      setTechList(user?.techs);
    };
  }, [user]);

  return user ? (
    <motion.div
      initial={{ x: "-1000px", opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: "-1000px", opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <SectionDashboard>
        <DivContainer>
          <Nav button={true} textButton="Sair" page="dashboard" />
        </DivContainer>
        <HeaderDashboard>
          <div>
            <h2>Olá, {user?.name}</h2>
            <p>{user?.course_module}</p>
          </div>
        </HeaderDashboard>
        <SectionTechDashboard>
          <div>
            <h2>Tecnologias</h2>
            <Button
              type="button"
              typeButton="img"
              func={() => setOpenModal(!openModal)}
            >
              <HiPlus color="#F8F9FA" />
            </Button>
          </div>
          <div>
            <UlTechDashboard>
              {techList?.length > 0 ? (
                techList.map((tech) => (
                  <CardTech
                    key={tech.id}
                    id={tech.id}
                    name={tech.title}
                    level={tech.status}
                    func={(e) => openModalEditFunc(e.target.id)}
                  />
                ))
              ) : (
                <div>
                  <h2>Sem tecnologias cadastradas</h2>
                </div>
              )}
            </UlTechDashboard>
          </div>
        </SectionTechDashboard>
        {openModal ? (
          <ModalTechRegister
            openModal={openModal}
            setOpenModal={setOpenModal}
          />
        ) : null}
        {openModalModify ? <ModalTechEdit /> : null}
        <StyledContainer autoClose={1000} />
      </SectionDashboard>
    </motion.div>
  ) : (
    <Navigate to="/" />
  );
};
