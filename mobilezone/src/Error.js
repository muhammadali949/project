import React from 'react'
import {Link} from 'react-router-dom' 

function Error() {
    return (
        <div style={{height:'90vh'}}>
            <h1 style={{color:'#000'}}>Page is not found</h1>
            <p>sorry this page isn't available</p>
            <Link to='/'><h4>Go back</h4></Link>

        </div>
    )
}

export default Error;
