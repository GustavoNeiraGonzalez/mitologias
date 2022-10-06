import swal from 'sweetalert2'
import React from 'react'

function alerta(texto) {
    swal.fire({
      icon:"success",
      title:"Alerta",
      text:texto
    })
}


  const error=(error) =>{
    swal.fire({
      icon:"error",
      title:"Alerta",
      text:error
    })
  }

  export {alerta,error}