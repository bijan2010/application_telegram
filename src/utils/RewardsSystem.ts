export const calculateRewards = (inviteCount: number): number => {
    let reward = 0;
    if (inviteCount >= 5) {
        reward += 3; // تتر برای 5 دعوت
    }
    if (inviteCount >= 10) {
        reward += 5; // بوست و 5 تتر برای 10 دعوت
    }
    return reward;
};
