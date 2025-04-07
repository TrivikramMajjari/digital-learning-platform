package com.digitallearning.service;

import com.digitallearning.dto.AssignmentDTO;
import com.digitallearning.exception.ResourceNotFoundException;
import com.digitallearning.model.Assignment;
import com.digitallearning.model.Course;
import com.digitallearning.repository.AssignmentRepository;
import com.digitallearning.repository.CourseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class AssignmentService {

    @Autowired
    private AssignmentRepository assignmentRepository;

    @Autowired
    private CourseRepository courseRepository;

    public List<AssignmentDTO> getAssignmentsByCourseId(Long courseId) {
        List<Assignment> assignments = assignmentRepository.findByCourseId(courseId);
        return assignments.stream().map(this::convertToDTO).collect(Collectors.toList());
    }

    public AssignmentDTO getAssignmentById(Long id) {
        Assignment assignment = assignmentRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Assignment", "id", id));
        return convertToDTO(assignment);
    }

    public AssignmentDTO createAssignment(AssignmentDTO assignmentDTO) {
        Assignment assignment = convertToEntity(assignmentDTO);
        assignment.setCreatedAt(LocalDateTime.now());
        Assignment savedAssignment = assignmentRepository.save(assignment);
        return convertToDTO(savedAssignment);
    }

    public AssignmentDTO updateAssignment(Long id, AssignmentDTO assignmentDTO) {
        Assignment assignment = assignmentRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Assignment", "id", id));
        
        assignment.setTitle(assignmentDTO.getTitle());
        assignment.setDescription(assignmentDTO.getDescription());
        assignment.setMaxScore(assignmentDTO.getMaxScore());
        assignment.setDueDate(assignmentDTO.getDueDate());
        
        Assignment updatedAssignment = assignmentRepository.save(assignment);
        return convertToDTO(updatedAssignment);
    }

    public void deleteAssignment(Long id) {
        Assignment assignment = assignmentRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Assignment", "id", id));
        assignmentRepository.delete(assignment);
    }

    public AssignmentDTO convertToDTO(Assignment assignment) {
        return new AssignmentDTO(
                assignment.getId(),
                assignment.getTitle(),
                assignment.getDescription(),
                assignment.getMaxScore(),
                assignment.getDueDate(),
                assignment.getCourse() != null ? assignment.getCourse().getId() : null
        );
    }

    public Assignment convertToEntity(AssignmentDTO assignmentDTO) {
        Assignment assignment = new Assignment();
        assignment.setId(assignmentDTO.getId());
        assignment.setTitle(assignmentDTO.getTitle());
        assignment.setDescription(assignmentDTO.getDescription());
        assignment.setMaxScore(assignmentDTO.getMaxScore());
        assignment.setDueDate(assignmentDTO.getDueDate());
        
        if (assignmentDTO.getCourseId() != null) {
            Course course = courseRepository.findById(assignmentDTO.getCourseId())
                    .orElseThrow(() -> new ResourceNotFoundException("Course", "id", assignmentDTO.getCourseId()));
            assignment.setCourse(course);
        }
        
        return assignment;
    }
}