import React, { useEffect } from 'react'
import {Link} from 'react-router-dom'
import register from '../../context/actions/register'

function RegisterContainer() {
    useEffect(() => { //useEffect renders(or runs) the body(here register()), only when there's a change in the dependency
        register()
        
    }, []) // here the dependency is empty ([]), hence will run only once
    return (
        <div>
            <h1>Register User</h1>
            <Link to="/auth/login">Login</Link>
        </div>
    )
}

export default RegisterContainer
