import React from 'react'
import './Formulario.css'

function Formulario() {
    
    function alerta(e) {
        e.preventDefault()
        alert(e.target.texto.value)
    }

  return (
    <div className="Formulario">
        <form onSubmit={alerta} >
            <p>Escribe un texto:</p>
            <input type="text" name="texto" />
            <input type="submit" />
        </form>
    </div>
  )
}

export default Formulario