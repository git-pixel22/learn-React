import React from 'react';
import { Card, Input, Button, Typography } from "@material-tailwind/react";
import { useNavigate } from 'react-router-dom';

export function SimpleRegistrationForm() {
  const [selectedRole, setSelectedRole] = React.useState('viewer'); // Default selection
  const [email, setEmail] = React.useState('');
  const [isValidEmail, setIsValidEmail] = React.useState(true);

  const navigate = useNavigate();

  const validateEmail = (email) => {
    // Simple regex for email validation
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleItemClick = (event) => {
    event.preventDefault(); // Prevent form submission

    if (validateEmail(email)) {
      navigate('/invite-sent');
    } else {
      setIsValidEmail(false);
    }
  };

  return (
    <Card color="transparent" className="bg-white p-10" shadow={false}>
      <Typography variant="h4" color="blue-gray">
        Send Invite
      </Typography>
      <Typography color="gray" className="mt-1 font-normal">
        Enter email to invite.
      </Typography>
      <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
        <div className="mb-1 flex flex-col gap-6">
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Email
          </Typography>
          <Input
            size="lg"
            placeholder="name@mail.com"
            className={`!border-t-blue-gray-200 focus:!border-t-gray-900 ${!isValidEmail ? 'border-red-500' : ''}`}
            labelProps={{
              className: "before:content-none after:content-none",
            }}
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setIsValidEmail(true); // Reset validity on input change
            }}
          />
          {!isValidEmail && (
            <Typography color="red" className="mt-2">
              Please enter a valid email address.
            </Typography>
          )}
        </div>

        <div className="flex flex-col gap-2 mt-6">
          <label className="flex items-center">
            <input
              type="radio"
              name="role"
              value="viewer"
              checked={selectedRole === 'viewer'}
              onChange={(e) => setSelectedRole(e.target.value)}
              className="mr-2"
            />
            <Typography variant="small" color="gray" className="flex items-center font-normal">
              Viewer
            </Typography>
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              name="role"
              value="editor"
              checked={selectedRole === 'editor'}
              onChange={(e) => setSelectedRole(e.target.value)}
              className="mr-2"
            />
            <Typography variant="small" color="gray" className="flex items-center font-normal">
              Editor
            </Typography>
          </label>
        </div>

        <Button className="mt-6" fullWidth onClick={handleItemClick}>
          Send Invite
        </Button>
      </form>
    </Card>
  );
}

export default function Invite() {
  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700">
      <SimpleRegistrationForm />
    </div>
  );
}
