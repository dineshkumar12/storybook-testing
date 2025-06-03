import type { Meta, StoryObj } from '@storybook/react';
import { Forms } from './Forms';

const meta: Meta<typeof Forms> = {
  title: 'Example/Form',
  component: Forms,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    // Add default props for your Form here, e.g.:
    // onSubmit: () => alert('Submitted!'),
    // initialValues: { name: '', email: '' },
    type: 'checkbox',
    label: "Remember me",
  },
};