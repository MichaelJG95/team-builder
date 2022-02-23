import React, { useState } from 'react';

import Form from './components/Form'
import TeamMember from './components/TeamMember'

const TeamMembersList = [
  { name: 'Mike', email: 'mike@me.com', role: 'Student', id: 0 },
  { name: 'Mark', email: 'theZuck@meta.com', role: 'Reptilian', id: 1 },
  { name: 'Joe', email: 'potus@whitehouse.gov', role: 'Politician', id: 2 },
]

function App() {
  const [teamMembers, setTeamMembers] = useState(TeamMembersList)

  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    role: ""
  })

  const [memberToEdit, setMemberToEdit] = useState({})
  const [isEditing, setIsEditing] = useState(false)

  const edit = (teamMember) =>  {
    setMemberToEdit({
      name: teamMember.name,
      email: teamMember.email,
      role: teamMember.role,
      id: teamMember.id
    })

    setFormValues({
      name: teamMember.name,
      email: teamMember.email,
      role: teamMember.role
    })

  }

  const updateForm = (name, value) => {
    setFormValues({ ...formValues, [name]: value})
  }

  const submitForm = () => {
    console.log(formValues)
    setTeamMembers([ ...teamMembers, formValues ])
    setFormValues({ 
      name: "",
      email: "",
      role: ""
    })
  }

  return (
    <div className="App">
      <h1>Team Builder</h1>
      <Form
        values={formValues}
        update={updateForm}
        submit={submitForm}
        isEditing={isEditing} />
      {teamMembers.map(member => <TeamMember key={member.id} info={member} edit={edit} isEditing={setIsEditing}/>)}
    </div>
  );
}

export default App;
