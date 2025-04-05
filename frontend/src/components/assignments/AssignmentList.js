import React, { useEffect, useState } from 'react';
import assignmentService from '../../services/assignmentService';

const AssignmentList = () => {
    const [assignments, setAssignments] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchAssignments = async () => {
            try {
                const response = await assignmentService.getAssignments();
                setAssignments(response.data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchAssignments();
    }, []);

    if (loading) {
        return <div>Loading assignments...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div>
            <h2>Assignments</h2>
            <ul>
                {assignments.map(assignment => (
                    <li key={assignment.id}>
                        <h3>{assignment.title}</h3>
                        <p>{assignment.description}</p>
                        <p>Due Date: {assignment.dueDate}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AssignmentList;