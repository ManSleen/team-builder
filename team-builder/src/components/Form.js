import React from "react";
import "../App.css";
import { Button, Form } from "semantic-ui-react";
import uuidv4 from "uuid/v4";

const TeamForm = ({
  addTeamMember,
  memberInfo,
  setMemberInfo,
  isEditing,
  editTeamMember,
  teamMembers
}) => {
  const { id, name, email, role } = memberInfo;

  const handleFormChanges = e => {
    setMemberInfo({ ...memberInfo, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = e => {
    e.preventDefault();
    isEditing
      ? editTeamMember(id, role, email, name, teamMembers)
      : addTeamMember({ id: uuidv4(), ...memberInfo });

    setMemberInfo({
      name: "",
      email: "",
      role: ""
    });
  };

  return (
    <div className="form-container">
      <Form onSubmit={handleFormSubmit}>
        <Form.Field>
          <label>Name</label>
          <input
            value={name}
            onChange={handleFormChanges}
            type="text"
            name="name"
            placeholder="Please Enter Name"
          />
        </Form.Field>
        <Form.Field>
          <label>Email</label>
          <input
            value={email}
            onChange={handleFormChanges}
            type="text"
            name="email"
            placeholder="Please Enter Email"
          />
        </Form.Field>
        <Form.Field>
          <label>Role</label>
          <input
            value={role}
            onChange={handleFormChanges}
            type="text"
            name="role"
            placeholder="Please Enter Role"
          />
        </Form.Field>
        <Button type="submit">{isEditing ? "Edit" : "Submit"}</Button>
      </Form>
    </div>
  );
};

export default TeamForm;
