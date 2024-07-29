import React from 'react';
import { useNavigate } from 'react-router-dom';

import {
  Card,
  CardBody,
  Typography,
  Tabs,
  TabsHeader,
  Tab,
  Button,
  Input,
  Avatar
} from "@material-tailwind/react";

function WorkspaceLayout() {
    const navigate = useNavigate();
    
    const handleItemClick = (title) => {
        
          navigate('/invite');
      };


  return (
    <div className="bg-purple-600 min-h-screen p-4">
      <Typography variant="h5" color="white" className="mb-4" onClick={()=>navigate("/")}>
        <span className="cursor-pointer">← Back to workspace</span>
      </Typography>
      
      <Typography variant="h3" color="white" className="mb-4">EF</Typography>
      
      <Card className="w-full">
        <CardBody>
          <Tabs value="members">
            <TabsHeader>
              <Tab value="members">Members</Tab>
              <Tab value="guests">Guests</Tab>
              <Tab value="teams">Teams</Tab>
              <Tab value="settings">Settings</Tab>
              <Tab value="integrations">Integrations</Tab>
              <Tab value="upgrade">Upgrade</Tab>
            </TabsHeader>
          </Tabs>
          
          <div className="flex justify-between items-center mt-4 mb-2">
            <Typography variant="h6">All members (1)</Typography>
            <div className="flex gap-2">
              <Button color="teal" onClick={handleItemClick}>Invite new members</Button>
            </div>
          </div>
          
          <Card className="mb-4">
            <CardBody className="flex items-center gap-4">
              <Avatar src="/goku.jpg" alt="avatar" />
              <div>
                <Typography variant="h6">Goku Agrawal (You)</Typography>
                <Typography color="gray">gokuagrawal@gmail.com</Typography>
              </div>
              <Typography color="blue" className="ml-auto">Admin / Editor</Typography>
              <Typography color="gray">1 day ago</Typography>
            </CardBody>
          </Card>
          
          {/* <Typography variant="h6" className="mb-2">There is 1 active invitation</Typography> */}
          
          {/* <Card>
            <CardBody className="flex items-center justify-between">
              <Typography>Jiren (jirenagrawal7@gmail.com) invited jirenagrawal7@gmail.com</Typography>
              <Typography color="gray">Expires in 30 days</Typography>
            </CardBody>
          </Card> */}
        </CardBody>
      </Card>
    </div>
  );
}

export default WorkspaceLayout;