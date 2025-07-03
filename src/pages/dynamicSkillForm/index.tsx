import { useFieldArray, useForm, Controller } from "react-hook-form";
import {
  Box,
  Button,
  TextField,
  Typography,
  IconButton,
  Stack,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

type FormValues = {
  skills: { name: string }[];
};

export default function DynamicForm() {
  const { control, handleSubmit } = useForm<FormValues>({
    defaultValues: {
      skills: [{ name: "" }],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "skills",
  });

  const onSubmit = (data: FormValues) => {
    console.log("Submitted Skills:", data.skills);
  };

  return (
    <Box
      component={"form"}
      onSubmit={handleSubmit(onSubmit)}
      p={3}
      maxWidth={500}
      mx={"auto"}
    >
      <Typography variant="h6" mb={2}>
        Daftar Skill
      </Typography>
      {fields.map((field, index) => (
        <Stack direction={"row"} spacing={2} key={field.id} mb={2}>
          <Controller
            name={`skills.${index}.name`}
            control={control}
            render={({ field }) => (
              <TextField {...field} label={`Skill ${index + 1}`} fullWidth />
            )}
          />
          <IconButton onClick={() => remove(index)} color="error">
            <DeleteIcon />
          </IconButton>
        </Stack>
      ))}

      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Button
          variant="outlined"
          onClick={() => append({ name: "" })}
          color="secondary"
        >
          Tambah Skill
        </Button>

        <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>
      </Box>
    </Box>
  );
}
