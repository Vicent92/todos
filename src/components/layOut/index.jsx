import { Main } from "../main"
import { NavBar } from "../navBar"

export const LayOut = () => {
    return (
        <>
        
            <div class="w-full min-h-screen bg-black grid grid-cols-[30%,auto]">

               <NavBar/>

               <Main/> 

            </div>

        </>
    )
}