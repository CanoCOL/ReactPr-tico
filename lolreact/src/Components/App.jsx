import { useState } from "react"
import './App.css'
import { Boton } from "./Boton"
export function App() {
   
    let [Contador, setContador ] = useState(0)

    function aumentarContador() {
        setContador(Contador +1)
        if(Contador > 10){
            setContador(Contador+10)
            
        }
       
    }
       
    function restarContador() {
        setContador(Contador -1)
        
    }  


    const [Tema, setTema] = useState('light')
    
    function delClick(){
        if(Tema== 'light'){
            setTema('dark')
     
        }else{
            setTema('light')
        }
    }
    return(
       <>
        <div className={' contenedor ' + Tema}>
            <Boton onClick={delClick} value={Tema  == 'dark'? 'Modo Claro':'Modo Oscuro'} />
            <div>
                <h1 className="contador">{Contador}</h1>
                <button className="aumento" onClick={aumentarContador}>Aumentar</button>
                <button className="decremento"onClick={restarContador}>Restar</button>
            </div>
        </div>

        
       </>
    )
}