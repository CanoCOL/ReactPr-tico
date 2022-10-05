import './Boton.css'
export function Boton({onClick, value}) {
    return(
        <>
            <button className='Modo' onClick={onClick}>{value}</button>
        </>
    )
}