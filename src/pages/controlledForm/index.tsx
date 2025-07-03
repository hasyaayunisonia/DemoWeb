import { useState } from "react";
import { TextField, Button, Box } from "@mui/material";

const ControlledForm = () => {
  const [name, setName] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Nama (controlled): ${name}`);
  };

  return (
    <Box component="form" onSubmit={handleSubmit} p={2}>
      <TextField
        label="Nama"
        value={name}
        onChange={(e) => setName(e.target.value)}
        fullWidth
        margin="normal"
      />
      <Button type="submit" variant="contained" color="primary">
        Submit
      </Button>
    </Box>
  );
};

export default ControlledForm;
