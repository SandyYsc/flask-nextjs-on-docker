import Head from 'next/head'
import TaskList from '@/components/TaskList'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>To Do List</title>
      </Head>

      <main>
        <TaskList></TaskList>
      </main>

      <footer>
      </footer>

    </div>
  )
}
