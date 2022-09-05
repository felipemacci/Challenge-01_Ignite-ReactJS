import { Task } from './Task'

import styles from './TasksContainer.module.css'

export function TasksContainer() {
  return (
    <div className={ styles.tasksContainer }>
      <header className={ styles.taskCounters }>
        <p>Created Tasks <span>5</span></p>
        <p>Completed <span>2 / 5</span></p>
      </header>

      <main>
        <Task />
        <Task />
        <Task />
      </main>
    </div>
  )
}