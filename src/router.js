import { createStackNavigator } from 'react-navigation'
import TodoApp from './components/TodoApp'
import TodoCreate from './components/TodoCreate'
import TodoDetail from './components/TodoDetail'
import TodoEdit from './components/TodoEdit'

export default createStackNavigator({
  TodoApp: { screen: TodoApp },
  TodoCreate: { screen: TodoCreate },
  TodoDetail:  { screen: TodoDetail },
  TodoEdit: { screen: TodoEdit }
})