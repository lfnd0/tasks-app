import styles from './TaskCounter.module.css'

interface TaskCounterProps {
  createdTask: number
  completedTask: number
}

export function TaskCounter({ completedTask, createdTask }: TaskCounterProps) {
  return (
    <div className={styles.container}>
      <aside>
        <p
          className={styles.createdTasks}
        >
          Tarefas criadas
        </p>
        <span
          className={styles.counters}
        >
          {createdTask}
        </span>
      </aside>

      <aside>
        <p
          className={styles.completedTasks}
        >
          Concluídas
        </p>
        <span
          className={styles.counters}
        >
          {
            completedTask ? `${completedTask} de ${createdTask}` : 0
          }
        </span>
      </aside>
    </div>
  )
}
