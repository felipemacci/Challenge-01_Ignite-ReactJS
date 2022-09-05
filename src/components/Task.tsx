import { Trash } from 'phosphor-react'

import styles from './Task.module.css'

export function Task() {
  return (
    <div className={ styles.task }>
      <input type="checkbox" />
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Illo eos corporis dolorem, deleniti nesciunt esse molestiae neque illum maxime nemo tempore iusto perspiciatis ea molestias vel non. Quod, optio odio!</p>
      <button>
        <Trash size={ 24 } />
      </button>
    </div>
  )
}