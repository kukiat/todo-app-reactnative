import { createStackNavigator } from 'react-navigation'
import Todo from './Todo'
import Create from './Create'
import TodoDetail from './TodoDetail'
import EditTodo from './EditTodo'

export default createStackNavigator({
  Todo: { screen: Todo },
  Create: { screen: Create },
  TodoDetail:  { screen: TodoDetail },
  EditTodo: { screen: EditTodo }
})