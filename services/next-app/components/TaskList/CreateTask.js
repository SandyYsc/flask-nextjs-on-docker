import styles from './CreateTask.module.css'
import axios from '@/utils/axios'
import apiPath from '@/utils/apiPath'
import { useState } from 'react'

export default function CreateTask(props) {
  const [taskInput, setTaskInput] = useState('')

  const handleInputChange = (e) => setTaskInput(event.target.value)

  const handleSubmit = async () => {
    await axios.post(apiPath.tasks.create_task, { content: taskInput })
    setTaskInput('')
    props.submitCallback()
  }

  return (  
    <div className={styles.create_task}>
      <input value={taskInput} onChange={handleInputChange}></input>
      <button onClick={handleSubmit}>Add</button>
    </div>
  )
}