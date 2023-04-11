import { useState } from 'react';
import './App.css';

function App() {
    let taskStyle = 'task'
    let [tasks, setTask] = useState([])
    const [inputTask, setInputTask] = useState('')
    const [finishedTasks, setFinishedTask] = useState([])
    const [style, setStyle] = useState(null)

    const addTask = () => {
        if (inputTask !== '') {
            setTask([...tasks, inputTask])
            setInputTask('')
            setStyle({ transform: 'translateY(50px)' })
            setTimeout(() => {
                setStyle({ transform: 'translateY(0px)' })
            }, 10)
        }
    }

    const removeTask = (i) => {
        const tmpArray = [...tasks]
        tmpArray.splice(i, 1)
        setTask(tmpArray)
        setInputTask(null)
    }
  

    const closeTask = (task, i) => {
        // concluir tarefa
        const tmpArray = [...finishedTasks, task]
        setFinishedTask(tmpArray)
        setStyle({ transform: 'translateY(50px)' })
        setTimeout(() => {
            setStyle({ transform: 'translateY(0px)' })
        }, 10)
        const removeTask = [...tasks]
        removeTask.splice(i, 1)
        setTask(removeTask)
        setInputTask(null)
    }

    const removeClosedTask = (i) => {
        const removedClosedTaskList = [...finishedTasks]
        removedClosedTaskList.splice(i, 1)
        setFinishedTask(removedClosedTaskList)
    }
    return (
        <div className="App-header">
            {/* <h2>Tarefas</h2> */}
            <div className="container">
                <div className="container-task">
                    <p>Digite suas tarefas para conclui-lás durante o dia.</p>
                    <label className="taskInput">
                        <input type="text" placeholder='Digite sua tarefa para adicionar...' onChange={(e) => setInputTask(e.target.value)} />
                    </label>
                    <button onClick={() => addTask()}>Adicionar</button>
                </div>
                {tasks.map((task, i) => (
                    <div style={style} className={taskStyle} key={i}>
                        <p>{task}</p>
                        <button onClick={() => closeTask(task)}>Concluir</button>
                        <button onClick={() => removeTask(i)}>Remover</button>
                    </div>
                ))}
                {
                    finishedTasks.map((finishedTask, i) => (
                        <div style={style} className="task" key={i}>
                            <p className='closedTask'>{finishedTask}</p>
                            <button onClick={() => removeClosedTask(finishedTask,i)}>Remover</button>
                        </div>
                    ))
                }
            </div>
        </div>
    );

}

export default App;
