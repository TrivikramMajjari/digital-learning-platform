import React from 'react';

const ResourceItem = ({ resource }) => {
    return (
        <div className="resource-item">
            <h3>{resource.title}</h3>
            <p>{resource.description}</p>
            <a href={resource.link} target="_blank" rel="noopener noreferrer">View Resource</a>
        </div>
    );
};

export default ResourceItem;