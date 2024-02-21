import { PlusCircle } from '@phosphor-icons/react'
import styles from './Task.module.css'
import { FormEvent } from 'react'

export function Task() {
  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault()
  }

  return (
    <article className={styles.task}>
      <header>
        <form
          className={styles.taskForm}
          onSubmit={handleCreateNewTask}
        >
          <input
            type='text'
            name='task'
            placeholder='Adicione uma nova tarefa'
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
    </article>
  )
}
