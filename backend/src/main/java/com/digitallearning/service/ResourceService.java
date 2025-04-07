package com.digitallearning.service;

import com.digitallearning.exception.ResourceNotFoundException;
import com.digitallearning.model.Course;
import com.digitallearning.model.Resource;
import com.digitallearning.repository.CourseRepository;
import com.digitallearning.repository.ResourceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
public class ResourceService {

    @Autowired
    private ResourceRepository resourceRepository;

    @Autowired
    private CourseRepository courseRepository;

    public List<Resource> getAllResources() {
        return resourceRepository.findAll();
    }

    public Resource getResourceById(Long id) {
        return resourceRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Resource", "id", id));
    }

    public List<Resource> getResourcesByCourseId(Long courseId) {
        return resourceRepository.findByCourseId(courseId);
    }

    public Resource createResource(Resource resource, Long courseId) {
        Course course = courseRepository.findById(courseId)
                .orElseThrow(() -> new ResourceNotFoundException("Course", "id", courseId));
        resource.setCourse(course);
        resource.setCreatedAt(LocalDateTime.now());
        return resourceRepository.save(resource);
    }

    public Resource updateResource(Long id, Resource resourceDetails) {
        Resource resource = resourceRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Resource", "id", id));
        
        resource.setTitle(resourceDetails.getTitle());
        resource.setType(resourceDetails.getType());
        resource.setContent(resourceDetails.getContent());
        resource.setUrl(resourceDetails.getUrl());
        
        return resourceRepository.save(resource);
    }

    public void deleteResource(Long id) {
        Resource resource = resourceRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Resource", "id", id));
        resourceRepository.delete(resource);
    }
}