import React, { useState, useEffect } from "react";
import "../App.css";
import { Button, Form } from "semantic-ui-react";

const TeamForm = ({
  setMemberToEdit,
  editTeamMember,
  memberToEdit,
  addTeamMember
}) => {
  const [memberInfo, setMemberInfo] = useState({
    name: "",
    email: "",
    role: ""
  });

  const handleFormChanges = e => {
    if (memberInfo.id) {
      setMemberInfo({
        ...memberInfo,
        [e.target.name]: e.target.value
      });
    } else {
      setMemberInfo({
        ...memberInfo,
        id: Date.now(),
        [e.target.name]: e.target.value
      });
    }
  };

  const handleFormSubmit = e => {
    e.preventDefault();
    if (memberToEdit) {
      editTeamMember({ ...memberInfo });
    } else {
      addTeamMember({ ...memberInfo });
    }
    setMemberInfo({
      name: "",
      email: "",
      role: ""
    });
    setMemberToEdit(null);
  };

  useEffect(() => {
    console.log(memberToEdit);
    setMemberInfo({ ...memberToEdit });
  }, [memberToEdit]);

  return (
    <div className="form-container">
      <Form onSubmit={handleFormSubmit}>
        <Form.Field>
          <label>Name</label>
          <input
            value={memberInfo.name}
            onChange={handleFormChanges}
            type="text"
            name="name"
            placeholder="Please Enter Name"
          />
        </Form.Field>
        <Form.Field>
          <label>Email</label>
          <input
            value={memberInfo.email}
            onChange={handleFormChanges}
            type="text"
            name="email"
            placeholder="Please Enter Email"
          />
        </Form.Field>
        <Form.Field>
          <label>Role</label>
          <input
            value={memberInfo.role}
            onChange={handleFormChanges}
            type="text"
            name="role"
            placeholder="Please Enter Role"
          />
        </Form.Field>
        <Button type="submit">Submit</Button>
      </Form>
    </div>
  );
};

export default TeamForm;
