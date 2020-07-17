import styles from './index.module.css'
import TaskItem from './TaskItem'
import CreateTask from './CreateTask'
import { default as axios, useAxios } from '@/utils/axios'
import apiPath from '@/utils/apiPath'
import { useCallback } from 'react'

export default function TaskList() {
  const [{ data, loading, error }, refetch] = useAxios(apiPath.tasks.all_tasks)

  const handleDelete = useCallback(async (id) => {
      await axios.delete(apiPath.tasks.delete_task(id))
      refetch()
    },
    [refetch]
  )

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error!</p>

  let taskItems = <p className={styles.no_task}>No task yet.</p>
  if (data.length) {
    taskItems = data.map(task =>
      <li key={task.id}>
        <TaskItem task={task} deleteTask={handleDelete}></TaskItem>
      </li>
    )
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>To Do List</h1>
      <CreateTask submitCallback={refetch} />
      <ul className={styles.list}>{taskItems}</ul>
    </div>
  )
}