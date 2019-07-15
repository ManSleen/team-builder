import React, { useState } from "react";
import TeamForm from "./components/Form";
import TeamMember from "./components/TeamMember";
import "semantic-ui-css/semantic.min.css";

const App = () => {
  const [teamMembers, setTeamMembers] = useState([
    {
      name: "James",
      email: "jamesyboy@jdogg.net",
      role: "Certified Internet Troll"
    },
    {
      name: "Hank",
      email: "hank@williamsjunior.org",
      role: "Matrix Architect"
    },
    { name: "Gilroy", email: "snazzyg@discoplanet.com", role: "Data Miner" }
  ]);

  const [memberToEdit, setMemberToEdit] = useState({});

  const addTeamMember = newMember => {
    setTeamMembers([...teamMembers, newMember]);
  };

  const editTeamMember = () => {};

  console.log(memberToEdit);
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
      <TeamForm memberToEdit={memberToEdit} addTeamMember={addTeamMember} />
    </div>
  );
};

export default App;
