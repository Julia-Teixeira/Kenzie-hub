import React from "react";
import ReactLoading from "react-loading";

export const Loading = ({ type, color }) => (
  <ReactLoading type={type} color={color} height={"20px"} width={"20px"} />
);
