import React from 'react';
import { Box } from '@mui/material';
import { withTimestamp } from '@/components/timeStamps/withTimestamp';
import Message from '@/components/timeStamps/Message';

const MessageWithTimestamp = withTimestamp(Message);

const MessageWithTimestampShow: React.FC = () => {
  return (
    <Box p={2}>
      <MessageWithTimestamp user="Hasya" message="Halo, ini Hasya!" />
      <MessageWithTimestamp user="Sonia" message="Aku Sonia :)" />
    </Box>
  );
};

export default MessageWithTimestampShow;
