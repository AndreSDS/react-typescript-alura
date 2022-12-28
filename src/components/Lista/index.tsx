import { useTarefas } from "../context/useTarefas";
import { ITarefa } from "../../types/tarefa";
import Item from "./Item";
import style from "./Lista.module.scss";

function Lista() {
  const { tarefas, selecionar } = useTarefas();

  function handleSelect(tarefa: ITarefa) {
    selecionar(tarefa);
  }

  return (
    <aside className={style.listaTarefas}>
      <h2> Estudos do dia </h2>
      <ul>
        {tarefas.map((tarefa: ITarefa) => (
          <Item
            selecionaTarefa={() => handleSelect(tarefa)}
            key={tarefa.id}
            {...tarefa}
          />
        ))}
      </ul>
    </aside>
  );
}

export default Lista;
