import React from 'react'
import Task from './components/Task'
import Header from './components/Header'
import Footer from './components/Footer'
import TaskInput from './components/TaskInput'
import store from './store'
import { observer } from 'mobx-react'
import './components/style/style.css'

class App extends React.Component {
  render() {
    const { sortedTasks } = store

    return (
      <div className="conteiner">
        <Header />
        <div className="conteiner">
          <h1 className="title">Active tasks{store.activeTasksCount}</h1>
          <TaskInput addTask={(v) => store.addTask(v)} />
          {sortedTasks.map((task) => (
            <Task
              doneTask={() => store.doneTask(task.id)}
              deleteTask={() => store.deleteTask(task.id)}
              task={task}
              key={task.id}
            />
          ))}
        </div>
        <Footer />
      </div>
    )
  }
}

export default observer(App)
