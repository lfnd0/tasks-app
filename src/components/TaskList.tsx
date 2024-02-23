import { PlusCircle } from '@phosphor-icons/react'
import { ChangeEvent, FormEvent, useState } from 'react'
import { TaskCounter } from './TaskCounter'
import { Empty } from './Empty'
import styles from './TaskList.module.css'
import { Task, ITask } from './Task'

export function TaskList() {
  const [tasks, setTasks] = useState<ITask[]>([])
  const [newTaskText, setNewTaskText] = useState('')

  function calculateNumberCompletedTasks(tasks: ITask[]) {
    return tasks.filter(task => task.isDone).length
  }

  function removeTask(taskId: number) {
    const tasksWithoutRemoveOne = tasks.filter(task => {
      return task.id !== taskId
    })
    setTasks(tasksWithoutRemoveOne)
  }

  function completeTask(taskId: number) {
    const completedTasks = tasks.map(task => {
      if (task.id === taskId) {
        return { ...task, isDone: task.isDone ? false : true }
      }

      return task
    })

    setTasks(completedTasks)
  }

  function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
    setNewTaskText(event.target.value)
  }

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault()
    setTasks([
      ...tasks,
      {
        id: Math.floor(Math.random() * 1000),
        text: newTaskText,
        isDone: false,
      },
    ])
    setNewTaskText('')
  }

  return (
    <article>
      <header className={styles.task}>
        <form
          className={styles.taskForm}
          onSubmit={handleCreateNewTask}
        >
          <input
            type='text'
            name='task'
            placeholder='Adicione uma nova tarefa'
            value={newTaskText}
            onChange={handleNewTaskChange}
            required
          />
          <button
            type='submit'
          >
            <span>
              Criar <PlusCircle size={16} color='#F2F2F2' weight='bold' />
            </span>
          </button>
        </form>
      </header>

      <TaskCounter
        createdTask={tasks.length}
        completedTask={calculateNumberCompletedTasks(tasks)}
      />

      {
        tasks.length ?
          <>
            {
              tasks.map(task => {
                return (
                  <Task
                    key={task.id}
                    task={task}
                    onRemoveTask={removeTask}
                    onCompleteTask={completeTask}
                  />
                )
              })
            }
          </> : <Empty />
      }

    </article>
  )
}
