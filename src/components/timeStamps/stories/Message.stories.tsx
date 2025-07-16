import type { Meta, StoryObj } from '@storybook/react-vite';
import Message from '../Message';

const meta: Meta<typeof Message> = {
  title: 'Molecules/Message',
  component: Message,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Komponen Message untuk menampilkan pesan chat dengan user, message, dan timestamp.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Message>;

export const Default: Story = {
  args: {
    user: 'Hasya',
    message: 'Halo! Ini pesan testing Storybook.',
    timestamp: '2025-07-16 14:33',
  },
};

export const LongMessage: Story = {
  args: {
    user: 'Leon',
    message:
      'Pesan ini cukup panjang untuk mengetes wrapping text di dalam komponen Message, agar kita bisa memastikan UI tidak rusak saat pesan sangat panjang atau multiline seperti ini.',
    timestamp: '2025-07-16 14:35',
  },
};

export const DifferentUser: Story = {
  args: {
    user: 'Ada Wong',
    message: 'Ready for mission.',
    timestamp: '2025-07-16 14:37',
  },
};
