import { Header } from './components/Header'
import { Task } from './components/Task'
import styles from './App.module.css'
import './global.css'
import { TaskList } from './components/TaskList'

export function App() {
  return (
    <div>
      <div className={styles.wrapper}>
        <Header />
        <Task />
      </div>
      <TaskList />
    </div>
  )
}
