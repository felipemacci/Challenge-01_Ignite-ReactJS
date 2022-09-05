import './global.css'
import styles from './App.module.css'
import logo from './assets/todo.svg'

export function App() {
  return (
    <>
      <header className={ styles.header }>
        <img src={ logo } alt="Logotipo do ToDo" />
      </header>
    </>
  )
}
