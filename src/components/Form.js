import React from 'react'

function Form({values, update, submit, isEditing}) {

    let buttonText = "Add Team Member"
    if (isEditing === true) {
        buttonText = "Edit Team Member"
    }

    const changeHandler = event => {
        const name = event.target.name
        const value = event.target.value
        update(name, value)
    }

    const submitHandler = event => {
        event.preventDefault()
        submit()
    }

    return (
        <form onSubmit={submitHandler}>
            <label>Name
                <input 
                name="name"
                type="text"
                value={values.name}
                onChange={changeHandler}
                />
            </label>

            <label>Email
                <input 
                name="email"
                type="email"
                value={values.email}
                onChange={changeHandler}
                />
            </label>

            <label>Role
                <select value={values.role} name="role" onChange={changeHandler}>
                    <option value="">--Select a Role--</option>
                    <option value="Student">Student</option>
                    <option value="Politician">Politician</option>
                    <option value="Pundit">Pundit</option>
                    <option value="Propagandist">Propagandist</option>
                    <option value="Reptilian">Reptilian</option>
                </select>
            </label>
            <input type="submit" value={buttonText} />
        </form>
    )
}

export default Form