import React from 'react';
import { FixedSizeList as List } from 'react-window';
import { Box, Typography, Avatar, Paper } from '@mui/material';

const messages = Array.from({ length: 10000 }).map((_, i) => ({
  id: i + 1,
  name: `User ${i + 1}`,
  message: `This is message number ${i + 1}`,
  time: `${(i % 24).toString().padStart(2, '0')}:${(i % 60).toString().padStart(2, '0')}`,
}));

const Row = ({ index, style }: { index: number; style: React.CSSProperties }) => {
  const item = messages[index];
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

export default function VirtualizedChat() {
  return (
    <Paper sx={{ height: 500, width: 400 }}>
      <List height={500} itemCount={messages.length} itemSize={60} width={'100%'}>
        {({ index, style }: { index: number; style: React.CSSProperties }) => (
          <Row index={index} style={style} />
        )}
      </List>
    </Paper>
  );
}
