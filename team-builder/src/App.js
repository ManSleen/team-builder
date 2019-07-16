import React, { useState } from "react";
import TeamForm from "./components/Form";
import TeamMember from "./components/TeamMember";
import uuidv4 from "uuid/v4";
import "semantic-ui-css/semantic.min.css";

const App = () => {
  const [teamMembers, setTeamMembers] = useState([
    {
      id: uuidv4(),
      name: "James",
      email: "jamesyboy@jdogg.net",
      role: "Certified Internet Troll"
    },
    {
      id: uuidv4(),
      name: "Hank",
      email: "hank@williamsjunior.org",
      role: "Matrix Architect"
    },
    {
      id: uuidv4(),
      name: "Gilroy",
      email: "snazzyg@discoplanet.com",
      role: "Data Miner"
    }
  ]);

  const [memberInfo, setMemberInfo] = useState({
    name: "",
    email: "",
    role: ""
  });

  const [isEditing, setIsEditing] = useState(false);

  const addTeamMember = newMember => {
    setTeamMembers([...teamMembers, newMember]);
  };

  const editTeamMember = (id, role, email, name, teamMember) => {
    const editArray = teamMember;
    let index = editArray.findIndex(obj => obj.id === id);
    console.log(index);
    editArray[index].name = name;
    editArray[index].role = role;
    editArray[index].email = email;
    setIsEditing(false);
  };

  return (
    <div>
      <h1>Here's the team!</h1>
      <div>
        {teamMembers.map((member, index) => (
          <TeamMember
            setIsEditing={setIsEditing}
            memberInfo={memberInfo}
            setMemberInfo={setMemberInfo}
            key={index}
            {...member}
          />
        ))}
      </div>
      <TeamForm
        teamMembers={teamMembers}
        setIsEditing={setIsEditing}
        isEditing={isEditing}
        memberInfo={memberInfo}
        setMemberInfo={setMemberInfo}
        editTeamMember={editTeamMember}
        addTeamMember={addTeamMember}
      />
    </div>
  );
};

export default App;
