// React Imports
import { useState } from 'react';

// Style Imports
import "./users.css";

// Component Imports
import User from '../user/user';

// Context Imports

// Data Imports

function Users(props) {
    return (
        <div className='users'>
            {
                props.users.map((user, index) => {
                    return <User key={ index } data={ user } />
                })
            }

        </div>
    )
}

export default Users;