import React from 'react'
import loading from "./bluecat.svg"

export default function Loader() {
    return (
        <div className='container text-center'>
            <img src={loading} alt="Loading..."/>
        </div>
    )
}
