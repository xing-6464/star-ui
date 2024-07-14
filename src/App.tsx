import React from 'react'
import Button from './components/Button'
import Alert from './components/Alert'
import Tabs from './components/Tabs/tabs'
import TabItem from './components/Tabs/tabItem'
import Menu from './components/Menu/menu'
import MenuItem from './components/Menu/menuItem'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import Icon from './components/Icon/icon';

library.add(fas)
function App() {
  return (
    <>
      <Button btnType="primary">hee</Button>
      <Alert title="Hello World" closable />
      <Icon icon='arrow-down'></Icon>

      <Menu mode="vertical">
        <MenuItem>Item 1</MenuItem>
        <MenuItem>Item 2</MenuItem>
        <MenuItem>Item 3</MenuItem>
      </Menu>

      <Tabs defaultIndex={0} type='card'>
        <TabItem label="Tab 1">xing</TabItem>
        <TabItem label="Tab 2">xing2</TabItem>
        <TabItem label="Tab 3">xing3</TabItem>
      </Tabs>
    </>
  )
}

export default App
