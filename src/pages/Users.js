import React from 'react'
import {Link} from "react-router-dom";

function Users() {
    return (
        <div>
            <h3>Users</h3>

            <ul>
                <li>
                    <Link to = '/home'> Home </Link>
                </li>
                <li>
                    <Link to = '/posts'> Posts </Link>
                </li>
                <li>
                    <Link to = '/login'> Login </Link>
                </li>
            </ul>
        </div>
    )
}

export default Users