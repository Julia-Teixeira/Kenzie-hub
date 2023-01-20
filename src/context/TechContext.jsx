import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";
import { ToastError, ToastSuccess } from "../components/Toast";
import { api } from "../services/api";
import { UserContext } from "./UserContext";

export const TechContext = createContext({});

const TechProvider = ({ children }) => {
  const { user, getUser } = useContext(UserContext);
  const [techList, setTechList] = useState();
  const [loading, setLoading] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [openModalModify, setOpenModalModify] = useState(false);
  const [techId, setTechId] = useState();
  const [tech, setTech] = useState();
  const tokenLocal = localStorage.getItem("@Token");

  const openModalEditFunc = (id) => {
    setTechId(id);
    setOpenModalModify(!openModalModify);
    getTech(id);
  };

  const registerTech = async (data) => {
    const tokenLocal = localStorage.getItem("@Token");
    await api
      .post("/users/techs", data, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Basic ${tokenLocal}`,
        },
      })
      .then((response) => {
        setLoading(true);
        if (response.statusText === "Created") {
          ToastSuccess("Tecnologia adicionada com sucesso !");

          getUser();
          setTechList(user.techs);

          setTimeout(() => {
            setOpenModal(!openModal);
          }, 1000);
        } else {
          ToastError("Ops, algo deu errado");
        }
      })
      .catch((error) => {
        setLoading(true);
        ToastError(error.response.data.message);
      })
      .finally(() =>
        setTimeout(() => {
          setLoading(false);
        }, 2000)
      );
  };

  const deliteTech = async () => {
    await api
      .delete(`/users/techs/${techId}`, {
        headers: {
          Authorization: `Basic ${tokenLocal}`,
        },
      })
      .then((response) => {
        setLoading(true);
        getUser();
        setTechList(user?.techs);

        ToastSuccess("Tecnologia excluída com sucesso !");

        setTimeout(() => {
          setOpenModalModify(!openModalModify);
        }, 2000);
      })
      .catch((error) => {
        setLoading(true);
        ToastError(error.response.data.message);
        return error.response;
      })
      .finally(() =>
        setTimeout(() => {
          setLoading(false);
        }, 2000)
      );
  };

  const getTech = async (id) => {
    const filteredTech = techList.filter((tech) => tech.id === id);
    setTech(filteredTech[0]);
  };

  const editTech = async (data) => {
    await api
      .put(`/users/techs/${techId}`, data, {
        headers: {
          Authorization: `Bearer ${tokenLocal}`,
        },
      })
      .then((response) => {
        setLoading(true);
        getUser();
        setTechList(user.techs);

        ToastSuccess("Tecnologia atualizada com sucesso !");

        setTimeout(() => {
          setOpenModalModify(!openModalModify);
        }, 2000);
      })
      .catch((error) => {
        setLoading(true);
        ToastError(error.response.data.message);
        return error.response;
      })
      .finally(() =>
        setTimeout(() => {
          setLoading(false);
        }, 2000)
      );
  };

  return (
    <TechContext.Provider
      value={{
        registerTech,
        loading,
        techList,
        openModal,
        setOpenModal,
        setTechList,
        openModalModify,
        setOpenModalModify,
        openModalEditFunc,
        techId,
        deliteTech,
        tech,
        editTech,
      }}
    >
      {children}
    </TechContext.Provider>
  );
};

export default TechProvider;
