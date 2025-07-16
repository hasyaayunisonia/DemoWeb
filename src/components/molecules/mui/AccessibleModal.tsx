import React, { useEffect, useRef } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
} from '@mui/material';

interface AccessibleModalProps {
  open: boolean;
  onClose: () => void;
}

const AccessibleModal: React.FC<AccessibleModalProps> = ({ open, onClose }) => {
  const firstInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (open && firstInputRef.current) {
      firstInputRef.current.focus();
    }
  }, [open]);

  return (
    <Dialog
      open={open}
      onClose={onClose}
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
      aria-modal="true"
      role="dialog"
    >
      <DialogTitle id="modal-title">Accessible Modal</DialogTitle>
      <DialogContent id="modal-description">
        <p>Silakan isi data diri Anda pada formulir berikut:</p>
        <form>
          <TextField
            label="Nama Lengkap"
            inputRef={firstInputRef}
            autoFocus
            fullWidth
            margin="dense"
            // aria-label="Nama Lengkap"
          />
          <TextField
            label="Email"
            type="email"
            fullWidth
            margin="dense"
            // aria-label="Email"
          />
        </form>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} aria-label="Close">
          Batal
        </Button>
        <Button variant="contained" aria-label="Submit" onClick={onClose}>
          Kirim
        </Button>
      </DialogActions>
    </Dialog>
  );
};
export default AccessibleModal;
