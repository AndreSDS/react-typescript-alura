import Botao from "../Botao";
import Relogio from "./Relogio";
import style from "./Cronometro.module.scss";
import { tempoParaSegundos } from "../../common/utils/time";
import { useEffect, useMemo, useRef, useState } from "react";
import { useTarefas } from "../context/useTarefas";

export default function Cronometro() {
  const [tempo, setTempo] = useState(0);
  const { tarefas, finalizar } = useTarefas();
  const timer = useRef<any>();
  
  const temTarefaSelecionada = useMemo(() => {
    return tarefas.find((tarefa) => tarefa.selecionado);
  }, [tarefas]);

  useEffect(() => {
    if (temTarefaSelecionada?.selecionado) {
      setTempo(tempoParaSegundos(temTarefaSelecionada.tempo));
    }
    
    return () => {
      clearTimeout(timer.current);
    }
  }, [temTarefaSelecionada]);

  function regressiva(contador: number = 0) {
    timer.current = setTimeout(() => {
      if (contador > 0) {
        setTempo(contador - 1);
        return regressiva(contador - 1);
      }
      finalizar();
    }, 1000);
  }

  return (
    <div className={style.cronometro}>
      <p className={style.titulo}>Escolha um card e inicie o Cronômetro</p>
      <div className={style.relogioWrapper}>
        <Relogio tempo={tempo} />
      </div>
      <Botao disbled={!temTarefaSelecionada?.selecionado} onClick={() => regressiva(tempo)}>Começar!</Botao>
    </div>
  );
}
