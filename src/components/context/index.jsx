import { createContext, useState } from "react";
import { useLocalStorage } from "../../hooks/useLocalStorage";

const contexto = createContext()

const tareas = [
    {
        id: 1,
        title: 'cocinar',
        description: 'hacer comida',
        completed: false,
    },
    {
        id: 2,
        title: 'salir',
        description: 'salir a cambiar la ram',
        completed: false,
    },
    {
        id: 3,
        title: 'fichas',
        description: 'ir a comprar las fichas',
        completed: false,
    }
]

const ProvedorContext = ({ children }) => {
    const { todos, saveTodos, loading, error } = useLocalStorage('TODOS_V1', [])
    const [newTarea, setNewTarea] = useState([])
    return (
        <contexto.Provider value={{
            todos,
            saveTodos,
            newTarea,
            setNewTarea,
            loading,
            error
        }}>

            {children}

        </contexto.Provider>
    )
}

export { ProvedorContext, contexto }