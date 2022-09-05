import { PlusCircle } from "phosphor-react";

import styles from './TaskCreatingBar.module.css'

export function TaskCreatingBar() {
  return (
    <form className={ styles.form }>
      <input type="text" placeholder="Add a new task" />
      <button>
        Add
        <PlusCircle size={ 18 } weight="bold" />
      </button>
    </form>
  )
}