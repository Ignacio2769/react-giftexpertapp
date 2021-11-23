import React, { useState, useEffect } from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem'

export const GifGrid = ({ category }) => {

    const { data: images, loading } = useFetchGifs(category)

    return (
        <>
            <h3 className='animate__animated animate__fadeIn'>{category}</h3>
            {loading && <p>Loading</p>}
            <div className='card-grid'>
                {
                    images.map((image) => {
                        return <GifGridItem
                            key={image.id}
                            img={image}
                        />
                    })
                }
            </div>
        </>
    )
}
