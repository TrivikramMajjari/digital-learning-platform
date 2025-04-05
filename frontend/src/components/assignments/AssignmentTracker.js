import React, { useEffect, useState } from 'react';
import assignmentService from '../../services/assignmentService';

const AssignmentTracker = () => {
    const [assignments, setAssignments] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchAssignments = async () => {
            try {
                const response = await assignmentService.getAssignments();
                setAssignments(response.data);
            } catch (err) {
                setError('Failed to fetch assignments');
            } finally {
                setLoading(false);
            }
        };

        fetchAssignments();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div>
            <h2>Assignment Tracker</h2>
            <ul>
                {assignments.map((assignment) => (
                    <li key={assignment.id}>
                        <h3>{assignment.title}</h3>
                        <p>{assignment.description}</p>
                        <p>Due Date: {assignment.dueDate}</p>
                        <p>Status: {assignment.status}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AssignmentTracker;