import React, { useState } from 'react';
import { AddCategory } from './AddCategory';
import PropTypes from 'prop-types'
import { GifGrid } from './GifGrid';

//rafc para crear le componente automaticamente

const GifExpertApp = () => {

    const [categorias, setCategorias] = useState(['Dragon Ball'])

    const handleAdd = () => {
        // setCategorias([...categorias, categoria])
    }

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategorias={setCategorias} />
            <hr></hr>

            {/* <button onClick={handleAdd}>Agregar</button> */}

            <ol>
                {
                    categorias.map(category => {
                        // return <li key={category}>{category}</li>
                        return <GifGrid
                            key={category}
                            category={category}
                        />
                    })
                }
            </ol>
        </>
    )
}

export default GifExpertApp