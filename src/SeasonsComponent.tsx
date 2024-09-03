import React, { useState } from 'react';
import { calculateRewards } from './utils/RewardsSystem'; // مسیر صحیح

const SeasonsComponent: React.FC = () => {
    const [season, setSeason] = useState(1);
    const [inviteCount] = useState(0); // حذف setInviteCount

    const nextSeason = () => {
        setSeason(season + 1);
    };

    const reward = calculateRewards(inviteCount);

    return (
        <div>
            <h2>Season {season}</h2>
            <p>Your reward: {reward} Tether</p>
            <button onClick={nextSeason}>Next Season</button>
        </div>
    );
};

export default SeasonsComponent;
