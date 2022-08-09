import { useContext } from "react"
import { useForm } from "react-hook-form"
import { contexto } from "../context"

export const NavBar = () => {
    const { register, handleSubmit } = useForm()
    const { saveTodos, todos } = useContext(contexto)

    const onSubmit = (values) => {
        const data = {
            title: values.title,
            description: values.description,
            completed: false
        }

        const newTodos = [...todos]
        newTodos.push(data)

        saveTodos(newTodos)
    }

    return (
        <div class="bg-nav col-[1/2] flex flex-col items-center">

            <form
                onSubmit={handleSubmit(onSubmit)}
                class="w-9/12 h-1/2 flex flex-col justify-center items-center bg-fondo mt-5 rounded-sm"
            >

                <input
                {...register('title')}
                type="text"
                placeholder="Title"
                class="w-9/12 h-11 mt-3 rounded-sm border outline-0 px-4"
                />

                <input
                {...register('description')}
                type="text"
                placeholder="Description"
                class="w-9/12 h-11 mt-3 rounded-sm border outline-0 px-4"
                />

                <button
                class="bg-boton w-20 h-7 mt-3 rounded-sm"
                >
                    Agregar
                </button>   

            </form>

        </div>
    )
}