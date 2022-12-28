import React from "react";
import style from "./Botao.module.scss";

interface Props {
  type?: "button" | "submit" | "reset" | undefined;
  onClick?: () => void;
  children?: React.ReactNode;
  disbled?: boolean;
}

function Botao({ onClick, type, children, disbled = false }: Props) {

  return (
    <button
      onClick={onClick}
      type={type}
      className={style.botao}
      disabled={disbled}
    >
      {children}
    </button>
  );
}

export default Botao;
