import { useState } from 'react';
import { Box, Button, Modal, Typography } from '@mui/material';

// Styling kontainer modal
const style = {
  position: 'absolute' as const,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  borderRadius: 2,
  width: 350,
};

interface MuiModalProps {
  title?: string;
  content?: string;
  buttonLabel?: string;
}

export default function MuiModal({
  title = 'Judul Modal',
  content = 'Ini adalah konten default di dalam modal.',
  buttonLabel = 'Buka Modal',
}: MuiModalProps) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button variant="contained" onClick={handleOpen}>
        {buttonLabel}
      </Button>
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <Typography variant="h6" component="h2">
            {title}
          </Typography>
          <Typography sx={{ mt: 2 }}>{content}</Typography>
          <Button
            onClick={handleClose}
            sx={{ mt: 3 }}
            variant="outlined"
            color="secondary"
            fullWidth
          >
            Tutup
          </Button>
        </Box>
      </Modal>
    </div>
  );
}
