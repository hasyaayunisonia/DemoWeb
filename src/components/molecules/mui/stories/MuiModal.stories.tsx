import type { Meta, StoryObj } from '@storybook/react-vite';
import MuiModal from '../MuiModal';

const meta: Meta<typeof MuiModal> = {
  title: 'Components/MUI/MuiModal',
  component: MuiModal,
  tags: ['autodocs'],
  args: {
    title: 'Judul Modal dari Storybook',
    content: 'Ini adalah konten modal yang ditentukan dari Storybook.',
    buttonLabel: 'Buka Modal dari Storybook',
  },
};
export default meta;
type Story = StoryObj<typeof MuiModal>;

export const Default: Story = {};

export const CustomContent: Story = {
  args: {
    title: 'Konfirmasi Penghapusan',
    content: 'Apakah Anda yakin ingin menghapus data ini? Tindakan ini tidak dapat dibatalkan.',
    buttonLabel: 'Hapus Data',
  },
};
