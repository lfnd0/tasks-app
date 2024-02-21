import styles from './TaskList.module.css'

export function TaskList() {
  return (
    <div className={styles.taskList}>
      <aside>
        <p
          className={styles.createdTasks}
        >
          Tarefas criadas
        </p>
        <span
          className={styles.counters}
        >
          0
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
          0
        </span>
      </aside>
    </div>
  )
}
