import React, { useOptimistic, useTransition, useState } from 'react';
import { TextField, Button, Box, Typography, Paper, Stack } from '@mui/material';

type Comment = {
  id: number;
  text: string;
};

export default function CommentForm() {
  const [comments, setComments] = useState<Comment[]>([{ id: 1, text: 'Ini Komentar Pertama' }]);

  const [isPending, startTransition] = useTransition();
  const [text, setText] = useState('');

  const [optimisticComments, addOptimisticComment] = useOptimistic(
    comments,
    (state, newComment: Comment) => [...state, newComment],
  );

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (!text.trim()) return;

    const newComment: Comment = {
      id: Date.now(),
      text,
    };

    startTransition(() => {
      addOptimisticComment(newComment);

      setTimeout(() => {
        const isSuccess = true;
        if (isSuccess) {
          setComments(prev => [...prev, newComment]);
        } else {
          alert('Gagal mengirim komentar');
        }
      }, 2000);
    });

    setText('');
  };

  return (
    <Box maxWidth="sm" mx="auto" mt={5}>
      <Typography variant="h6" gutterBottom>
        Tambah Komentar{' '}
      </Typography>

      <form onSubmit={handleAdd}>
        <Stack direction="row" mb={2} spacing={2}>
          <TextField
            fullWidth
            label="Tulis komentar..."
            value={text}
            onChange={e => setText(e.target.value)}
          />
          <Button type="submit" variant="contained" disabled={isPending}>
            Kirim
          </Button>
        </Stack>
      </form>

      <Stack spacing={1}>
        {optimisticComments.map(c => {
          const isConfirmed = comments.find(x => x.id === c.id);
          return (
            <Paper
              key={c.id}
              variant="outlined"
              sx={{
                p: 2,
                bgcolor: isConfirmed ? '#f9f9f9' : '#e0e0e0',
                opacity: isConfirmed ? 1 : 0.6,
                display: 'flex',
                alignItems: 'center',
                gap: 1,
                transition: 'all 0.3s ease-in-out',
              }}
            >
              <span>{c.text}</span>
            </Paper>
          );
        })}
      </Stack>
    </Box>
  );
}
