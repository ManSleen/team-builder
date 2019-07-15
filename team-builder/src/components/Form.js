import React from "react";
import "../App.css";
import { Button, Checkbox, Form } from "semantic-ui-react";

const TeamForm = () => {
  return (
    <div className="form-container">
      <Form>
        <Form.Field>
          <label>Name</label>
          <input type="text" name="name" placeholder="Please Enter Name" />
        </Form.Field>
        <Form.Field>
          <label>Email</label>
          <input type="text" name="email" placeholder="Please Enter Email" />
        </Form.Field>
        <Form.Field>
          <label>Role</label>
          <input type="text" name="role" placeholder="Please Enter Role" />
        </Form.Field>
        <Button type="submit">Submit</Button>
      </Form>
    </div>
  );
};

export default TeamForm;
