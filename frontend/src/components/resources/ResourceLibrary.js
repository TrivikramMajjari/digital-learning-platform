import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ResourceItem from './ResourceItem';

const ResourceLibrary = () => {
    const [resources, setResources] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchResources = async () => {
            try {
                const response = await axios.get('/api/resources'); // Adjust the endpoint as needed
                setResources(response.data);
            } catch (err) {
                setError('Failed to fetch resources');
            } finally {
                setLoading(false);
            }
        };

        fetchResources();
    }, []);

    if (loading) {
        return <div>Loading resources...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div>
            <h1>Resource Library</h1>
            <div className="resource-list">
                {resources.map(resource => (
                    <ResourceItem key={resource.id} resource={resource} />
                ))}
            </div>
        </div>
    );
};

export default ResourceLibrary;