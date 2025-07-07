import React from 'react';
import { Typography, Box } from '@mui/material';

interface MessageProps {
  user: string;
  message: string;
  timestamp: string; // akan di-inject oleh HOC
}

const Message: React.FC<MessageProps> = ({ user, message, timestamp }) => {
  return (
    <Box p={2} border="1px solid #ccc" borderRadius="8px" mb={1}>
      <Typography variant="subtitle2">{user}</Typography>
      <Typography variant="body1">{message}</Typography>
      <Typography variant="caption" color="text.secondary">
        Sent at: {timestamp}
      </Typography>
    </Box>
  );
};

export default Message;
