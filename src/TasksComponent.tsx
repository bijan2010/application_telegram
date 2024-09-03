// TasksComponent.tsx
import React, { useState } from 'react';

const TasksComponent: React.FC = () => {
    const [inviteCount, setInviteCount] = useState(0);

    const inviteFriends = () => {
        // کد دعوت دوستان و افزایش تعداد دعوت‌ها
        setInviteCount(inviteCount + 1);
    };

    return (
        <div>
            <h2>Tasks</h2>
            <div>
                <h3>Invite Friends</h3>
                <p>Invite 5 friends to get a speed boost!</p>
                <button onClick={inviteFriends}>Invite Friends</button>
                <p>You have invited {inviteCount} friends</p>
            </div>
            <div>
                <h3>Watch YouTube Video</h3>
                <button onClick={() => alert('You watched the video!')}>Watch</button>
            </div>
        </div>
    );
};

export default TasksComponent;
