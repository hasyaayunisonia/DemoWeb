import type { Meta, StoryObj } from '@storybook/react-vite';
import FormLaporanKerusakan from '../index';

const meta: Meta<typeof FormLaporanKerusakan> = {
  title: 'Forms/FormLaporanKerusakan',
  component: FormLaporanKerusakan,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof FormLaporanKerusakan>;

export const Default: Story = {};
