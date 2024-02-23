import { Check, Trash } from '@phosphor-icons/react'
import styles from './Task.module.css'

export interface ITask {
  id: number
  text: string
  isDone: boolean
}

interface TaskProps {
  task: ITask
  onRemoveTask: (taskId: number) => void
  onCompleteTask: (taskId: number) => void
}

export function Task({ task, onRemoveTask, onCompleteTask }: TaskProps) {
  function handleRemoveTask() {
    onRemoveTask(task.id)
  }

  function handleCompleteTask() {
    onCompleteTask(task.id)
  }

  const isTaskDoneClassName = task.isDone ?
    styles.checkboxChecked : styles.checkboxUnchecked

  const isTextDoneClassName = task.isDone ?
    styles.textChecked : styles.textUnchecked

  return (
    <div className={styles.container}>
      <div>
        <label
          htmlFor='checkbox'
          onClick={handleCompleteTask}
        >
          <input
            readOnly
            type='checkbox'
            name='isDone'
          />
          <span
            className={`${styles.checkbox} ${isTaskDoneClassName}`}
          >
            {
              task.isDone &&
              <Check
                size={12}
                color='#F2F2F2'
              />
            }
          </span>
          <p
            className={`${styles.text} ${isTextDoneClassName}`}
          >
            {task.text}
          </p>
        </label>
      </div>

      <button
        onClick={handleRemoveTask}
        title='Remover tarefa'
      >
        <Trash size={16} color='#808080' />
      </button>
    </div>
  )
}
