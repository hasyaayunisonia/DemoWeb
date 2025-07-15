import { useState } from 'react';
import { Button } from '@mui/material';
import AccessibleModal from '../../components/molecules/mui/AccessibleModal';

const AccessiblePage = () => {
  const [open, setOpen] = useState(false);

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Implementasi WCAG, ARIA, dan focus management</h1>
      <Button
        variant="contained"
        color="primary"
        onClick={() => setOpen(true)}
        aria-label="Buka Formulir Pendaftaran"
      >
        Buka Formulir
      </Button>
      <AccessibleModal open={open} onClose={() => setOpen(false)} />
    </div>
  );
};

export default AccessiblePage;
