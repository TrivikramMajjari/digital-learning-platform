import React from 'react';
import { useEffect, useState } from 'react';
import { getUserProgress } from '../../services/userService';
import ProgressChart from './ProgressChart';

const Dashboard = () => {
    const [progressData, setProgressData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProgressData = async () => {
            try {
                const data = await getUserProgress();
                setProgressData(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchProgressData();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div className="dashboard">
            <h1>Your Dashboard</h1>
            {progressData && <ProgressChart data={progressData} />}
            {/* Additional dashboard components can be added here */}
        </div>
    );
};

export default Dashboard;