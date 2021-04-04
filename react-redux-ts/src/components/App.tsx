import { Component } from 'react'
import { connect } from 'react-redux'
import { fetchTodos, deleteTodo, Todo } from '../actions'
import { StoreState } from '../reducers'

interface AppProps {
  todos: Todo[]
  fetchTodos: Function
  deleteTodo: Function
}

interface AppState {
  isFetching: boolean
}

class _App extends Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props)

    this.state = {
      isFetching: false,
    }
  }

  componentDidUpdate(prevProps: AppProps): void {
    if (!prevProps.todos.length && this.props.todos.length) {
      this.setState({ isFetching: false })
    }
  }

  onButtonClick = (): void => {
    setTimeout(this.props.fetchTodos, 1000)
    this.setState({ isFetching: true })
  }

  onTodoClick = (id: number): void => {
    this.props.deleteTodo(id)
  }

  renderList(): JSX.Element[] {
    return this.props.todos.map((todo: Todo) => {
      return (
        <div key={todo.id} onClick={() => this.onTodoClick(todo.id)}>
          {todo.title}
        </div>
      )
    })
  }

  render() {
    return (
      <div>
        <button onClick={this.onButtonClick}>Fetch</button>
        {this.state.isFetching ? 'LOADING...' : null}
        {this.renderList()}
      </div>
    )
  }
}

const mSP = (state: StoreState): { todos: Todo[] } => {
  return {
    todos: state.todos,
  }
}

const mDP = { fetchTodos, deleteTodo }

export const App = connect(mSP, mDP)(_App)
