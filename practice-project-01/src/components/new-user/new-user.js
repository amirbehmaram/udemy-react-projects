// React Imports
import { useState } from 'react';

// Style Imports
import "./new-user.css";

// Component Imports

// Context Imports

// Data Imports

function NewUser(props) {
    let nameEle = document.getElementById('username');
    let ageEle = document.getElementById('age');

    const submitNewUser = (event) => {  
        let name, age;

        if (nameEle) {
            name = nameEle.value;
        }

        if (ageEle) {
            age = ageEle.value;
        }

        if (name && age) {
            // Check if age is > 0 otherwise throw an error and show our popup
            if (age < 0) {

            }

            // Add our user
            props.addNewUser(prevState => {
                return prevState.concat(name + ' (' + age + 'years old' + ')');
            });

            clearInputFields();
        } else {
           // Show our popup with an empty attribute warning
        }
    }

    const clearInputFields = () => {
        nameEle.value = '';
        ageEle.value = 0;
    };

    return (
        <div className='new-user'>
            <label className='input-label' htmlFor='username'>UserName</label>
            <input 
              type='text'
              id='username'
              name='username'
              className='input-field'
            />

            <label className='input-label' htmlFor='age'>Age (Years)</label>
            <input 
              type='number'
              id='age'
              name='age'
              className='input-field'
            />

            <button 
              className='submit-button'
              onClick={submitNewUser}
            >
                Add User
            </button>

        </div>
    )
}

export default NewUser;