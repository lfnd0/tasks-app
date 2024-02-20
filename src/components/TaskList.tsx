import styles from './TaskList.module.css'

export function TaskList() {
  return(
    <div className={styles.taskList}>
      <p>Tarefas criadas</p>
      <p>Concluídas</p>
    </div>
  )
}
