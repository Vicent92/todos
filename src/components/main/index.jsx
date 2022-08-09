import { useContext, useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { contexto } from "../context";

export const Main = () => {
    const { todos, saveTodos, loading, error } = useContext(contexto)
    const [valueSearch, setValueSearch] = useState('')
    let newArray = []

    const handleChage = (e) => {
        const { value } = e.target

        setValueSearch(value)
    }

    if (!valueSearch.length >= 1) {
        newArray = todos
    }else{
        newArray = todos.filter(el => {
            const datosMinisculas = el.description.toLowerCase()
            const searchMiniscula = valueSearch.toLowerCase()
            return datosMinisculas.includes(searchMiniscula)
        })
    }

    const handleDelete = (id) => {
        const todoIndex = todos.findIndex(todo => todo.id === id)
        const newTodos = [...todos]
        newTodos.splice(todoIndex, 1)
        saveTodos(newTodos)
    }

    return (
        <div class="bg-fondo flex justify-center items-center">

            <div class="min-h-screen w-1/2 flex flex-col items-center">

                <h1 class="w-full h-24 flex justify-center items-center text-6xl">
                    TO DO
                </h1>

                <input
                type='text'
                placeholder='Buscar'
                class="w-9/12 h-11 mt-3 rounded-md border outline-0 px-4"
                onChange={handleChage}
                />

                {loading && <p>Cargando...</p>}

                {error && <p>Lo siento, a ocurrido un error</p>}

                {
                    newArray.map(el => {
                        return (
                            <div class="w-3/4 h-14 bg-items flex justify-around items-center mt-5 rounded-sm">
                                
                                <input
                                type="checkbox"
                                />

                                {el.description}

                                <AiOutlineDelete
                                onClick={() => handleDelete(el.id)}
                                class="cursor-pointer"
                                />

                            </div>
                        )
                    })
                }

            </div>

        </div>
    )
}