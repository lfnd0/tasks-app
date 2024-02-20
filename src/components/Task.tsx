import styles from './Task.module.css'

export function Task() {
  return (
    <article className={styles.task}>
      <header>
        <form
          className={styles.taskForm}
        >
          <input
            type='text'
            name='task'
            placeholder='Adicione uma nova tarefa'
            required />
          <button>Criar</button>
        </form>
      </header>
    </article>
  )
}
