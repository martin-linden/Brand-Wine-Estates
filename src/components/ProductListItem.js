import React from 'react'


const ProductListItem = (Props) => {
    const { wine } = Props
    return (
        <>
            <p>Name: {wine.name} | Producer: {wine.producer} | Type: {wine.type}</p>
        </>
    )
}

export default ProductListItem