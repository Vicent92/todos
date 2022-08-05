import { useEffect, useState } from "react";

export const useLocalStorage = (itemsName, initialValue) => {
    // AQAUI GUARDAMOS TODO LO RELACIONADOP A LOCAL STORAGE
    const [todos, setTodos] = useState(initialValue)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    // EN ESTE EFECTO ESTOY SIMULANDO UNA PETICION A UNA API
    useEffect(() => {
        setTimeout(() => {
            try {

                const localStorageTodos = localStorage.getItem(itemsName);

                let parsedTodos;

                if (!localStorageTodos) {
                    localStorage.setItem('TODOS_V1', JSON.stringify(initialValue))
                    parsedTodos = initialValue
                }else{
                    parsedTodos = JSON.parse(localStorageTodos)
                }

                setTodos(parsedTodos)

            } catch(error) {

                setError(error)

            }finally {

                setLoading(false)

            }

        }, 1000);
    })
    
    

    const saveTodos = (newTodos) => {
        try {

            const stringifiedTodos = JSON.stringify(newTodos)
            localStorage.setItem(itemsName, stringifiedTodos)
            setTodos(newTodos)

        }

        catch(error) {

            setError(error)

        }
    }

    return {
        todos, 
        saveTodos,
        loading,
        error
    }
}