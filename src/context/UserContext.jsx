import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import { useNavigate } from "react-router-dom";
import { ToastError, ToastSuccess } from "../components/Toast";
import { api } from "../services/api";

export const UserContext = createContext({});

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const userId = localStorage.getItem("@UserId");
  const userToken = localStorage.getItem("@Token");

  const registerUser = async (data) => {
    await api
      .post(
        "/users",
        {
          name: data.name,
          email: data.email,
          password: data.password,
          bio: data.bio,
          course_module: data.course_module,
          contact: data.contact,
        },
        { headers: { "Content-Type": "application/json" } }
      )
      .then((response) => {
        setLoading(true);

        if (response.statusText === "Created") {
          ToastSuccess("Cadastro feito com sucesso !");

          setTimeout(() => {
            navigate("/");
          }, 2000);
        } else {
          ToastError("Ops, algo deu errado");
        }
      })
      .catch((error) => {
        setLoading(true);
        ToastError(error.response.data.message);
      })
      .finally(
        setTimeout(() => {
          setLoading(false);
        }, 2000)
      );
  };

  const logIn = async (data) => {
    await api
      .post("/sessions", data)
      .then((response) => {
        setLoading(true);

        if (response.status !== 200) {
          ToastError(response.message);
        } else {
          localStorage.setItem("@Token", response.data.token);
          localStorage.setItem("@UserId", response.data.user.id);

          setUser(response.data.user);

          ToastSuccess("Login feito com sucesso !");
          setTimeout(() => {
            navigate("/dashboard");
          }, 3000);
        }
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

  const logOut = () => {
    localStorage.clear();

    setTimeout(() => {
      navigate("/");
      setUser(null);
    }, 1000);
  };

  const getUser = async () => {
    if (userId !== null) {
      await api
        .get(`/users/${userId}`)
        .then((response) => setUser(response.data))
        .catch((error) => {
          return error.response;
        });
    }
  };

  useEffect(() => {
    const getProfile = async () => {
      try {
        const { data } = await api.get(`/profile`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${userToken}`,
          },
        });

        setUser(data);
      } catch (error) {
        localStorage.clear();
      }
    };

    if (userToken) {
      getProfile();
    }
  }, []);

  return (
    <UserContext.Provider
      value={{ user, loading, registerUser, logIn, logOut, getUser, userId }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
