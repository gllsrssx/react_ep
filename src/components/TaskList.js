import React from 'react';
import TaskItem from './TaskItem';

function TaskList({ tasks, onToggle, onDelete }) {
    return (
        <div>
            {tasks.map(task => (
                <TaskItem key={task.id} task={task} onToggle={() => onToggle(task)} onDelete={() => onDelete(task)} />
            ))}
        </div>
    );
}

export default TaskList;