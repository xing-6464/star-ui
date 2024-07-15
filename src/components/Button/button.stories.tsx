import Button from './button'

import type { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'Button 按钮',
  tags: ['autodocs'],
  component: Button,
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof Button>

export const Default: Story = {
  storyName: '默认按钮样式',
  args: {
    btnType: 'default',
    children: 'default button',
  },
  render: (args) => <Button {...args} />,
}

export const Primary: Story = {
  storyName: '主要按钮样式',
  render: () => <Button btnType="primary">primary button</Button>,
}

export const SizeButton: Story = {
  storyName: '不同尺寸按钮',
  render: () => (
    <>
      <Button size="lg">large button</Button>
      <Button>default button</Button>
      <Button size="sm">small button</Button>
    </>
  ),
}
