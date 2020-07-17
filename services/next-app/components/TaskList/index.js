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

  const renderTaskList = () => {
    if (loading) return <p>Loading...</p>
    if (error) return <p>Error!</p>
    if (!data.length) return <p className={styles.no_task}>No task yet.</p>
    return (
      <ul className={styles.list}>
        {
          data.map(task => (
            <li key={task.id}>
              <TaskItem task={task} deleteTask={handleDelete}></TaskItem>
            </li>
          ))
        }
      </ul>
    )
  }

  const taskList = renderTaskList()

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>To Do List</h1>
      <CreateTask submitCallback={refetch} />
      {taskList}
    </div>
  )
}