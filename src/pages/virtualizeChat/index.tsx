import { Paper } from '@mui/material';
import VirtualizedChat from '@/components/organisms/VirtualizedChat';

const messages = Array.from({ length: 10000 }).map((_, i) => ({
  id: i + 1,
  name: `User ${i + 1}`,
  message: `This is message number ${i + 1}`,
  time: `${(i % 24).toString().padStart(2, '0')}:${(i % 60).toString().padStart(2, '0')}`,
}));

export default function VirtualizedChatShow() {
  return (
    <Paper sx={{ height: 500, width: '95vW', mt: 4 }}>
      <VirtualizedChat messages={messages} />
    </Paper>
  );
}
