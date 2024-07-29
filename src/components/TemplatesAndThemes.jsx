import React from 'react';
import {
  Card,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";

function ProUpgradeCard() {
  return (
    <Card className="w-100 mx-auto">
      <CardBody className="flex flex-col items-center">
        {/* Placeholder for the custom graphic */}
        <div className="mb-4 w-full h-32 flex items-center justify-center">
            <img 
                src="/graphic.png" 
                alt="Custom templates and themes" 
                className="object-contain h-full w-full"
            />
        </div>

        <Typography variant="h5" color="blue-gray" className="mb-2 text-center">
          Create custom templates and themes with Pro
        </Typography>
        
        <Typography color="gray" className="mb-4 text-center text-sm">
          Save files as templates for quick reuse across your workspace, and create themes to match your brand colors.
        </Typography>
        
        <Button color="purple" className="mb-4">
          Upgrade to Pro
        </Button>
        
        <Typography color="blue" className="text-sm cursor-pointer">
          Browse the template library
        </Typography>
      </CardBody>
    </Card>
  );
}

export default ProUpgradeCard;