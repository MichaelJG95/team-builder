import React, { useState } from 'react';

import Form from './components/Form'

const TeamMembersList = [
  { name: 'Mike', email: 'mike@me.com', role: 'student', id: 0 },
  { name: 'Mark', email: 'theZuck@meta.com', role: 'reptilian', id: 1 },
  { name: 'Joe', email: 'potus@whitehouse.gov', role: 'president', id: 2 },
]

function App() {
  const [teamMembers, setTeamMembers] = useState(TeamMembersList)

  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    role: ""
  })

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
        submit={submitForm} />
      {teamMembers.map(member => <h2 key={member.id}>{member.name} email: {member.email} role: {member.role} </h2>)}
    </div>
  );
}

export default App;
