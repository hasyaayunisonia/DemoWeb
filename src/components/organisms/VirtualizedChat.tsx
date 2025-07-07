import React from 'react';
import { FixedSizeList as List } from 'react-window';
import { Box, Typography, Avatar } from '@mui/material';

type Message = {
  id: number;
  name: string;
  message: string;
  time: string;
};

type VirtualizedChatProps = {
  messages: Message[];
};

type RowProps = {
  index: number;
  style: React.CSSProperties;
  data: Message[];
};

const Row = ({ index, style, data }: RowProps) => {
  const item = data[index];

  return (
    <Box style={style} display="flex" alignItems="center" p={1} borderBottom="1px solid #eee">
      <Avatar sx={{ mr: 2 }}>{item.name[5]}</Avatar>
      <Box>
        <Typography variant="subtitle2">
          {item.name} • {item.time}
        </Typography>
        <Typography variant="body2">{item.message}</Typography>
      </Box>
    </Box>
  );
};

export default function VirtualizedChat({ messages }: VirtualizedChatProps) {
  return (
    <List
      height={500}
      itemCount={messages.length}
      itemSize={60}
      width="100%"
      itemData={messages} // <-- passing messages to Row
    >
      {({ index, style, data }: RowProps) => <Row index={index} style={style} data={data} />}
    </List>
  );
}
