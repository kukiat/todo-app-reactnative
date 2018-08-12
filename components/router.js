import { createStackNavigator } from 'react-navigation'
import TodoApp from './TodoApp'
import TodoCreate from './TodoCreate'
import TodoDetail from './TodoDetail'
import TodoEdit from './TodoEdit'

export default createStackNavigator({
  Todo: { screen: TodoApp },
  TodoCreate: { screen: TodoCreate },
  TodoDetail:  { screen: TodoDetail },
  TodoEdit: { screen: TodoEdit }
})