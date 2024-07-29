import React from 'react';
import { useNavigate } from 'react-router-dom';

import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button
} from "@material-tailwind/react";

function InvitationSentCard() {

    const navigate = useNavigate();
    const handleItemClick = (title) => {
        
          navigate('/');
      };
  return (
    <Card className="w-96 mx-auto mt-20">
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-2 text-center">
          Your invitation has been sent!
        </Typography>
        <Typography className="text-center">
          You've invited 1 person to EF.
        </Typography>
      </CardBody>
      <CardFooter className="pt-0 flex justify-between">
        <Button color="teal" fullWidth className="mr-2" onClick={handleItemClick}>
          Done
        </Button>
        <Button color="light-blue" fullWidth className="ml-2">
          Invite More
        </Button>
      </CardFooter>
    </Card>
  );
}

export default function InviteSent() {
    return (
      <div className="flex justify-center items-center h-screen bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700">
        <InvitationSentCard />
      </div>
    );
  }
  