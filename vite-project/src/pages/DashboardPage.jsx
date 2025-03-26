import React from 'react';
import { useNavigate, Outlet } from 'react-router-dom';
import { useUserContext } from '../context/UserContext'; // Ensure this hook exists and is correctly imported

export function DashboardMessages(props) {
    const { currentUser } = useUserContext();

    return (
        <div className="DashboardMessages">
            <p>Welcome to your dashboard, {currentUser.email}</p>
        </div>
    );
}

export function DashboardTasks(props) {
    const tasks = [
        { id: 1, name: 'Learn React' },
        { id: 2, name: 'Decide on capstone project' },
        { id: 3, name: 'Learn databases' }
    ];

    return (
        <div className="DashboardTasks">
            <ul className="tasks">
                {tasks.map((task) => (
                    <li key={task.id}>{task.name}</li>
                ))}
            </ul>
        </div>
    );
}

export default function DashboardPage() {
    const navigate = useNavigate();

    return (
        <div className="DashboardPage componentBox">
            <h1>Dashboard</h1>

            {/* Navigation buttons */}
            <div>
                <button onClick={() => navigate('/dash/tasks')}>
                    Show Tasks
                </button>
                <button onClick={() => navigate('/dash/messages')}>
                    Show Messages
                </button>
                <button onClick={() => navigate(-1)}>
                    Back
                </button>
            </div>

            {/* The Outlet will render the component based on the route */}
            <div className="DashboardContent">
                <Outlet />
            </div>
        </div>
    );
}
