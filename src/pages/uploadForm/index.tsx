import {
  Box,
  Button,
  CircularProgress,
  LinearProgress,
  Paper,
  TextField,
  Typography,
} from '@mui/material';
import { Controller, useForm } from 'react-hook-form';
import { useSnackbar } from 'notistack';
import { useRef, useState } from 'react';
// import mock from '@/api/mock';

import axios from 'axios';
import type { AxiosProgressEvent } from 'axios';

// === TIPE ===
type UploadItem = {
  file: File;
  progress: number;
  status: 'uploading' | 'done' | 'error';
};

type FormValues = {
  title: string;
  content: string;
};

// === KOMPONEN ===
export default function AutoUploadOnSelect() {
  const { control, handleSubmit } = useForm<FormValues>();
  const { enqueueSnackbar } = useSnackbar();
  const inputRef = useRef<HTMLInputElement>(null);
  const [isLoadingSubmitting, setIsLoadingSubmitting] = useState(false);

  const [uploads, setUploads] = useState<UploadItem[]>([]);
  const MAX_FILE_SIZE = 10 * 1024 * 1024;

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selected = Array.from(e.target.files || []);

    selected.forEach(file => {
      if (file.type !== 'application/pdf') {
        enqueueSnackbar(`"${file.name}" bukan PDF`, { variant: 'warning' });
        return;
      }
      if (file.size > MAX_FILE_SIZE) {
        enqueueSnackbar(`"${file.name}" melebihi 10MB`, { variant: 'warning' });
        return;
      }

      // Tambahkan ke state sebagai 'uploading'
      setUploads(prev => [...prev, { file, progress: 0, status: 'uploading' }]);

      // Mulai upload
      uploadFile(file);
    });

    e.target.value = ''; // reset input
  };

  const uploadFile = async (file: File) => {
    const formData = new FormData();
    formData.append('file', file);

    try {
      await axios.post('/api/upload', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
        onUploadProgress: (e: AxiosProgressEvent) => {
          if (e.total) {
            const percent = Math.round((e.loaded * 100) / e.total);
            setUploads(prev => prev.map(u => (u.file === file ? { ...u, progress: percent } : u)));
          }
        },
      });

      setUploads(prev =>
        prev.map(u => (u.file === file ? { ...u, progress: 100, status: 'done' } : u)),
      );
    } catch (err) {
      console.log(err);
      enqueueSnackbar(`Upload gagal: ${file.name}`, { variant: 'error' });
      setUploads(prev => prev.map(u => (u.file === file ? { ...u, status: 'error' } : u)));
    }
  };

  const onSubmit = async (data: FormValues) => {
    setIsLoadingSubmitting(true);
    try {
      const formData = new FormData();
      formData.append('title', data.title);
      formData.append('content', data.content);

      // Tambahkan file yang sudah selesai upload
      uploads.forEach(item => {
        if (item.status === 'done') {
          formData.append('files', item.file); // bisa pakai `files[]` jika backend pakai array
        }
      });
      console.log('Form data:', formData);

      const res = await axios.post('/api/submit-form', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });

      enqueueSnackbar('Form dan file berhasil dikirim!', {
        variant: 'success',
      });
      console.log('Submit response:', res.data);
    } catch (err) {
      enqueueSnackbar('Gagal mengirim form', { variant: 'error' });
    } finally {
      setIsLoadingSubmitting(false);
    }
  };

  return (
    <Paper sx={{ p: 3, maxWidth: 600, mx: 'auto', mt: 5 }}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box display="flex" flexDirection="column" gap={2}>
          <Typography variant="h6">Auto Upload Saat Pilih File</Typography>

          <Controller
            name="title"
            control={control}
            defaultValue=""
            render={({ field }) => <TextField {...field} label="Judul" fullWidth size="small" />}
          />
          <Controller
            name="content"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField {...field} label="Isi" fullWidth multiline rows={3} />
            )}
          />

          <input
            type="file"
            accept="application/pdf"
            hidden
            multiple
            ref={inputRef}
            onChange={handleFileChange}
          />
          <Button variant="outlined" onClick={() => inputRef.current?.click()}>
            Pilih File (PDF)
          </Button>

          {uploads.map((item, idx) => (
            <Box
              key={idx}
              sx={{
                border: '1px solid #ccc',
                borderRadius: 1,
                p: 1,
                backgroundColor: '#f5f5f5',
              }}
            >
              {/* File Name */}
              <Typography
                noWrap
                sx={{
                  maxWidth: '100%',
                  fontSize: 14,
                  fontWeight: 500,
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                }}
                title={item.file.name}
              >
                {item.file.name}
              </Typography>

              {/* Progress only if still uploading or error */}
              {item.status !== 'done' && (
                <Box sx={{ mt: 1, position: 'relative' }}>
                  <LinearProgress
                    variant="determinate"
                    value={item.progress}
                    sx={{
                      height: 10,
                      borderRadius: 1,
                      backgroundColor: item.status === 'error' ? '#ffcdd2' : undefined,
                    }}
                    color={item.status === 'error' ? 'error' : 'primary'}
                  />
                  <Typography
                    variant="caption"
                    sx={{
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                      fontWeight: 'bold',
                      color: item.status === 'error' ? '#c62828' : 'white',
                      textShadow: '0 0 2px black',
                    }}
                  >
                    {item.status === 'error' ? 'Gagal' : `${item.progress}%`}
                  </Typography>
                </Box>
              )}
            </Box>
          ))}

          <Button
            type="submit"
            variant="contained"
            color="primary"
            disabled={uploads.some(u => u.status === 'uploading') || isLoadingSubmitting}
            startIcon={
              isLoadingSubmitting ? <CircularProgress size={18} color="inherit" /> : undefined
            }
          >
            {isLoadingSubmitting ? 'Mengirim...' : 'Kirim Form'}
          </Button>
        </Box>
      </form>
    </Paper>
  );
}
