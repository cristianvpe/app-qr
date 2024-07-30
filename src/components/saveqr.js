import React, { useState } from 'react';

const SaveDb= ({data,nref,desc})=>{
const [mensaje, setMensaje]=useState(false)
const [respuesta, setRespuesta]=useState('')
const userId = localStorage.getItem('tandem_id')

    const saveQr= async () => {
       
        try {
            const response = await fetch('https://cristian.tandempatrimonionacional.eu/api-qr-tandem/v1/create-qr.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    "data": data,
                    "nombre_ref": nref,
                    "description": desc,
                    "created_by": userId
                })
            });
            const respuesta=await response.json();
           setRespuesta(respuesta.message)
           setMensaje(true)
           console.log(respuesta.message)

        } catch (error) {
            console.error('Error creando código QR', error);
        
        }
    };

   return(
    <>
    <button onClick={saveQr} className='button-collapse'>Guardar</button>
    {mensaje && <p>{respuesta.message}</p> }
    </>
   ) 
}


export default SaveDb