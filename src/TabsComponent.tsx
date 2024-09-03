import React, { useState } from 'react';
import TasksComponent from './TasksComponent'; // ایمپورت کامپوننت TasksComponent

const TabsComponent: React.FC = () => {
    const [activeTab, setActiveTab] = useState('main');

    return (
        <div>
            <div className="tabs">
                <button onClick={() => setActiveTab('main')}>Main</button>
                <button onClick={() => setActiveTab('tasks')}>Tasks</button>
            </div>
            {activeTab === 'main' && <div>Main Tab Content</div>}
            {activeTab === 'tasks' && <TasksComponent />}
        </div>
    );
};

export default TabsComponent;
