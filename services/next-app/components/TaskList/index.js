import styles from './index.module.css'
import TaskItem from './TaskItem'
import { default as axios, useAxios } from '@/utils/axios'
import apiPath from '@/utils/apiPath'
import { useState, useCallback } from 'react'

export default function TaskList() {
  const [{ data, loading, error }, refetch] = useAxios(apiPath.tasks.all_tasks)
  const [taskInput, setTaskInput] = useState('')

  const handleInputChange = (e) => setTaskInput(event.target.value)

  const handleSubmit = async () => {
    await axios.post(apiPath.tasks.create_task, { content: taskInput })
    setTaskInput('')
    refetch()
  }

  const handleDelete = useCallback(async (id) => {
      await axios.delete(apiPath.tasks.delete_task(id))
      refetch()
    },
    [refetch]
  )

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error!</p>
  if (!data || !data.length) return <p>No Task</p>

  const taskItems = data.map(task =>
    <li key={task.id}>
      <TaskItem task={task} deleteTask={handleDelete}></TaskItem>
    </li>
  )

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>To Do List</h1>
      <div className={styles.create_task}>
        <input value={taskInput} onChange={handleInputChange}></input>
        <button onClick={handleSubmit}>submit</button>
      </div>
      <ul className={styles.list}>{taskItems}</ul>
    </div>
  )
}