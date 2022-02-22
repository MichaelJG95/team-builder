import './App.css';
import React, { useState } from 'react';


const TeamMembersList = [
  { name: 'Mike', email: 'mike@me.com', role: 'student', id: 0 },
  { name: 'Mark', email: 'theZuck@meta.com', role: 'reptilian', id: 1 },
  { name: 'Joe', email: 'potus@whitehouse.gov', role: 'president', id: 2 },
]

function App() {
  const [teamMembers, setTeamMembers] = useState(TeamMembersList)

  return (
    <div className="App">
      <h1>Team Builder</h1>
      <form>
        <input 
          name="teamMemberName"
          type="text"
        />

      </form>
      {teamMembers.map(member => <h2 key={member.id}>{member.name} email: {member.email} role: {member.role} </h2>)}
    </div>
  );
}

export default App;
