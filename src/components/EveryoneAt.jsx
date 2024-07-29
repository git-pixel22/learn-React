import React from 'react';
import { Card, Typography, Button } from '@material-tailwind/react';

const DashboardComponent = () => {
  return (
    <div className="flex flex-col items-center h-screen bg-gray-100">
      <div className="w-full max-w-6xl p-4">
        {/* Banner */}
        <Card className="flex items-center justify-center p-4 mb-4 h-60 bg-gray-300">
          <Typography variant="h3" className="text-gray-700">
            Everyone at EF
          </Typography>
        </Card>

        {/* Buttons in squares */}
        <div className="grid grid-cols-4 gap-4 mb-3">
          <Card className="flex items-center justify-center p-4 h-60 bg-purple-500">
            <Button color="white">+ Board</Button>
          </Card>
          <Card className="flex items-center justify-center p-4 h-60 bg-blue-500">
            <Button color="white">+ Doc</Button>
          </Card>
          <Card className="flex items-center justify-center p-4 h-60 bg-gray-500">
            <Button color="white">+ From Template</Button>
          </Card>
          <Card className="flex items-center justify-center p-4 h-60 bg-gray-500">
            <Button color="white">+ Folder</Button>
          </Card>
        </div>

        {/* Table Header */}
        <Card className="p-4">
          <div className="grid grid-cols-5 gap-4 text-gray-500 mb-4">
            <Typography variant="small" className="text-center">Name</Typography>
            <Typography variant="small" className="text-center">Created</Typography>
            <Typography variant="small" className="text-center">By</Typography>
            <Typography variant="small" className="text-center">Modified</Typography>
            <Typography variant="small" className="text-center">By</Typography>
          </div>
          <div className="text-center text-gray-500">
            <Typography variant="h6">No items found</Typography>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default DashboardComponent;
