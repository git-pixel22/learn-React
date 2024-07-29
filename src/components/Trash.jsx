import React from 'react';
import { Button, Card, Typography } from '@material-tailwind/react';

const EmptyTrashComponent = () => {
  return (
    <div className="flex flex-col items-center h-screen bg-gray-100">
      <Card className="w-full max-w-4xl p-8">
        <div className="flex justify-between items-center">
          <Button color="red">Empty trash</Button>
          <Typography variant="small" className="text-gray-500">
            Trash contains items deleted by you.
          </Typography>
        </div>
        <div className="mt-8">
          <div className="flex justify-between items-center text-gray-400">
            <Typography variant="small">Name</Typography>
            <Typography variant="small">Deleted from</Typography>
            <Typography variant="small">On</Typography>
          </div>
          <div className="mt-4 text-center text-gray-500">
            <Typography variant="h6">No items found</Typography>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default EmptyTrashComponent;
