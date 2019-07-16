import React from "react";
import { Card, Icon } from "semantic-ui-react";

const TeamMember = ({ id, role, email, name, setMemberInfo, setIsEditing }) => {
  const populateForm = (name, email, role, id) => {
    setMemberInfo({ name, email, role, id });
    setIsEditing(true);
  };

  return (
    <Card>
      <Card.Content>
        <Card.Header>{name}</Card.Header>
        <Card.Meta>
          <span>{role}</span>
        </Card.Meta>
        <Card.Description>{email}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <button onClick={() => populateForm(name, email, role, id)}>
          <Icon name="edit" />
          Edit
        </button>
      </Card.Content>
    </Card>
  );
};

export default TeamMember;
