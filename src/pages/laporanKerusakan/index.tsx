import React from "react";
import {
  TextField,
  Button,
  Box,
  Typography,
  Autocomplete,
} from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

// Key - Value options
const jenisBarangOptions = [
  { key: 1, value: "Komputer" },
  { key: 2, value: "Printer" },
  { key: 3, value: "Proyektor" },
  { key: 4, value: "Lainnya" },
];

// Yup schema
const schema = yup.object({
  nama: yup.string().required("Nama pelapor wajib diisi"),
  jenisBarang: yup
    .object({
      key: yup.number().required("Jenis barang wajib dipilih"),
      value: yup.string().required(),
    })
    .required("Jenis barang wajib dipilih")
    .typeError("Jenis barang wajib dipilih"),
  deskripsi: yup
    .string()
    .required("Deskripsi kerusakan wajib diisi")
    .min(10, "Minimal 10 karakter"),
});

const FormLaporanKerusakan = () => {
  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
    defaultValues: {
      nama: "",
      jenisBarang: { key: 0, value: "" },
      deskripsi: "",
    },
  });

  const onSubmit = (data: any) => {
    console.log("Data dikirim:", data);
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      sx={{
        maxWidth: 500,
        mx: "auto",
        mt: 5,
        p: 3,
        display: "flex",
        flexDirection: "column",
        gap: 2,
        border: "1px solid #ccc",
        borderRadius: 2,
        boxShadow: 1,
      }}
    >
      <Typography variant="h6">Form Laporan Kerusakan Barang</Typography>

      <Controller
        name="nama"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            label="Nama Pelapor"
            fullWidth
            error={!!errors.nama}
            helperText={errors.nama?.message}
          />
        )}
      />

      <Controller
        name="jenisBarang"
        control={control}
        render={({ field }) => (
          <Autocomplete
            options={jenisBarangOptions}
            getOptionLabel={(option) => option?.value || ""}
            isOptionEqualToValue={(option, value) => option.key === value?.key}
            value={field.value}
            onChange={(_, newValue) => field.onChange(newValue)}
            onBlur={field.onBlur}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Jenis Barang"
                fullWidth
                error={!!errors.jenisBarang}
                helperText={errors.jenisBarang?.message}
              />
            )}
          />
        )}
      />

      <Controller
        name="deskripsi"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            label="Deskripsi Kerusakan"
            multiline
            minRows={3}
            fullWidth
            error={!!errors.deskripsi}
            helperText={errors.deskripsi?.message}
          />
        )}
      />

      <Button type="submit" variant="contained" disabled={!isValid}>
        Laporkan
      </Button>
    </Box>
  );
};

export default FormLaporanKerusakan;
