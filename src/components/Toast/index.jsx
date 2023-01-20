import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const ToastError = (message) => {
  return toast.error(`${message}`, {
    position: toast.POSITION.TOP_RIGHT,
  });
};

export const ToastSuccess = (message) => {
  toast.success(`${message}`, {
    position: toast.POSITION.TOP_RIGHT,
  });
};
