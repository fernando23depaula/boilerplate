import { Meta, Story } from '@storybook/react/types-6-0'
import Main from '.'

export default {
  title: 'Main',
  component: Main,
  args: {
    title: 'Defaul title para todos os stories daqui',
    description: "Default description para todos os stories daqui"
  }
} as Meta

export const Basic: Story = (args) => <Main {...args} />
export const Default: Story = (args) => <Main {...args} />
Basic.args = {
  title: 'Sobrescrevendo o title padrao ',
  description: 'Sobrescrevendo o description padrao'
}
