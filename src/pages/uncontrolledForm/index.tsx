import { useRef } from 'react';
import { TextField, Button, Box } from '@mui/material';

const UncontrolledForm = () => {
  const nameRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Nama (uncontrolled): ${nameRef.current?.value}`);
  };

  return (
    <Box component="form" onSubmit={handleSubmit} p={2}>
      <TextField
        label="Nama"
        inputRef={nameRef}
        defaultValue="John Doe"
        fullWidth
        margin="normal"
      />
      <Button type="submit" variant="contained" color="primary">
        Submit
      </Button>
    </Box>
  );
};

export default UncontrolledForm;
