import React from 'react'

const TeamMember = ({ info, edit, isEditing }) => {

    const scrollTop = () =>{ 
        window. scrollTo({top: 0, behavior: 'smooth'}); 
        edit({ 
            name: info.name,
            email: info.email,
            role: info.role,
            id: info.id
          })
        isEditing(true)
    }

    return (
        <div className='team-member-card'>
            <h2>{info.name}</h2>
            <p>Email: {info.email}</p>
            <p>Role: {info.role}</p>
            <button onClick={scrollTop} >Edit</button>
        </div>
    )
}

export default TeamMember