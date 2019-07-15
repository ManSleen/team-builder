import React from "react";
import { Card, Icon } from "semantic-ui-react";

const TeamMember = ({ member, setMemberToEdit }) => {
  console.log(member.key);
  return (
    <Card>
      <Card.Content>
        <Card.Header>{member.name}</Card.Header>
        <Card.Meta>
          <span>{member.role}</span>
        </Card.Meta>
        <Card.Description>{member.email}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <button onClick={() => setMemberToEdit(member)}>
          <Icon name="edit" />
          Edit
        </button>
      </Card.Content>
    </Card>
  );
};

export default TeamMember;
