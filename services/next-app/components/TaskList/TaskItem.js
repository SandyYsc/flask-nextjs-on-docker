import styles from './TaskItem.module.css'

export default function TaskItem(props) {
  const { task, deleteTask } = props
  const { content, id } = task
  return (
    <div>
      <button className={styles.button} onClick={() => deleteTask(id)}>x</button>
      {content}
    </div>
  )
}