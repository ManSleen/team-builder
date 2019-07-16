import React, { useState } from "react";
import TeamForm from "./components/Form";
import TeamMember from "./components/TeamMember";
import "semantic-ui-css/semantic.min.css";

const App = () => {
  const [teamMembers, setTeamMembers] = useState([
    {
      id: 1,
      name: "James",
      email: "jamesyboy@jdogg.net",
      role: "Certified Internet Troll"
    },
    {
      id: 2,
      name: "Hank",
      email: "hank@williamsjunior.org",
      role: "Matrix Architect"
    },
    {
      id: 3,
      name: "Gilroy",
      email: "snazzyg@discoplanet.com",
      role: "Data Miner"
    }
  ]);

  const [memberToEdit, setMemberToEdit] = useState(null);

  const addTeamMember = newMember => {
    setTeamMembers([...teamMembers, newMember]);
  };

  const editTeamMember = teamMember => {
    teamMembers.map(person => {
      if (person.id === teamMember.id) {
        console.log(person, "should be changed to", teamMember);
        return (person.name = teamMember.name);
      } else {
        return person;
      }
    });
  };

  return (
    <div>
      <h1>Here's the team!</h1>
      <div>
        {teamMembers.map((member, index) => (
          <TeamMember
            key={index}
            setMemberToEdit={setMemberToEdit}
            member={member}
          />
        ))}
      </div>
      <TeamForm
        editTeamMember={editTeamMember}
        memberToEdit={memberToEdit}
        setMemberToEdit={setMemberToEdit}
        addTeamMember={addTeamMember}
      />
    </div>
  );
};

export default App;
