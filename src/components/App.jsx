import { useState } from 'react'
import { Button, Form, InputGroup, ListGroup } from 'react-bootstrap'

let nextId = 0

function App() {
  const [task, setTask] = useState('')
  const [tasks, setTasks] = useState([])

  const deleteTask = id => {
    const updatedTasks = tasks.filter(task => task.id !== id)
    setTasks(updatedTasks)
  }

  return (
    <>
      <div className="App">
        <h1>React to do list</h1>
        <InputGroup className="mb-3">
          <InputGroup.Text>TASK LIST</InputGroup.Text>
          <Form.Control
            placeholder="Add a task here..."
            aria-label="Username"
            value={task}
            onChange={e => setTask(e.target.value)}
          />
          <Button
            onClick={() => {
              setTasks([...tasks, { id: nextId++, name: task }])
            }}
          >
            AÑADIR
          </Button>
        </InputGroup>
      </div>
      <div>
        {' '}
        <ListGroup>
          <ListGroup.Item>
            {' '}
            {tasks.map(task => (
              <li key={task.id}>
                {task.name}{' '}
                <Button variant="danger" onClick={() => deleteTask(task.id)}>
                  Eliminar
                </Button>
              </li>
            ))}
          </ListGroup.Item>
        </ListGroup>
      </div>{' '}
    </>
  )
}

export default App
