import './App.css'
import { ProvedorContext } from './components/context'
import { LayOut } from './components/layOut'

function App() {

  return (
    <ProvedorContext>

      <div class="h-full min-h-screen bg-red-600 flex justify-center items-center">
        
        <LayOut/>
  
      </div>

    </ProvedorContext>
  )
}

export default App
