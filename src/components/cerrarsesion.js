import React from 'react'
const CerrarSesion = ()=>{
    const handleCerrarSesion= ()=>{
        localStorage.removeItem('tandem_nombre')
        localStorage.removeItem('tndm_id')
        localStorage.removeItem('tndm_email')
        window.location.href='/formulario'
    }
    return (
        <>
        <button className='cerrarsesion' onClick={handleCerrarSesion}>CERRAR SESION</button>
        </>
    )
}
export default CerrarSesion