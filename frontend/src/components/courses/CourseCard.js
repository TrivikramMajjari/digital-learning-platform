import React from 'react';
import './CourseCard.css'; // Assuming you have a CSS file for styling

const CourseCard = ({ course }) => {
    return (
        <div className="course-card">
            <h3 className="course-title">{course.title}</h3>
            <p className="course-description">{course.description}</p>
            <p className="course-instructor">Instructor: {course.instructor}</p>
            <p className="course-duration">Duration: {course.duration} hours</p>
            <button className="enroll-button">Enroll Now</button>
        </div>
    );
};

export default CourseCard;