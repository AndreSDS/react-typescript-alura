import create from 'zustand'
import { ITarefa } from "../../types/tarefa";

interface UseTarefasProps {
    tarefas: ITarefa[];
    adicionar: (tarefa: ITarefa) => void;
    selecionar: (tarefaSelecionada: ITarefa) => void;
    finalizar: () => void;
}

export const useTarefas = create<UseTarefasProps>((set) => ({
    tarefas: [],
    adicionar: (tarefa: ITarefa) => set(state => ({
        tarefas: [
            ...state.tarefas,
            tarefa
        ]
    })),
    selecionar: (tarefaSelecionada: ITarefa) => set(state => {
        return (
            {
                tarefas: state.tarefas.map(tarefa => {
                    if (tarefa.id === tarefaSelecionada.id) {
                        return {
                            ...tarefa,
                            selecionado: true,
                            tempo: tarefa.tempo
                        }
                    } else {
                        return {
                            ...tarefa,
                            selecionado: false,
                            tempo: '0'
                        }
                    }
                })
            })
    }),
    finalizar: () => set(state => ({
        tarefas: state.tarefas.map(tarefa => {
            if (tarefa.selecionado) {
                return {
                    ...tarefa,
                    selecionado: false,
                    completado: true
                }
            }

            return tarefa
        })
    }))
}
))
