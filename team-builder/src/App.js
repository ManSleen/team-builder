import React, { useState } from "react";
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
  return (
    <div>
      <h1>Here's the team!</h1>
      <div>
        {teamMembers.map(member => (
          <div>{member.name}</div>
        ))}
      </div>
    </div>
  );
};

export default App;
