import React from 'react';
import imagem from '../assets/img/404.png'
import '../assets/css/imagem.css'

const Pagina404 = () => {
    return (
        <main>
            <img className='imagem404'  src = {imagem} width='auto' alt='ilustracao' />
            
        </main>
    )
}

export default Pagina404