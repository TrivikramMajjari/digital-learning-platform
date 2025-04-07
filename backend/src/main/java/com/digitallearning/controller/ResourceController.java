package com.digitallearning.controller;

import com.digitallearning.model.Resource;
import com.digitallearning.service.ResourceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/resources")
public class ResourceController {

    @Autowired
    private ResourceService resourceService;

    @GetMapping
    public ResponseEntity<List<Resource>> getAllResources() {
        List<Resource> resources = resourceService.getAllResources();
        return ResponseEntity.ok(resources);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Resource> getResourceById(@PathVariable Long id) {
        Resource resource = resourceService.getResourceById(id);
        return ResponseEntity.ok(resource);
    }

    @GetMapping("/course/{courseId}")
    public ResponseEntity<List<Resource>> getResourcesByCourseId(@PathVariable Long courseId) {
        List<Resource> resources = resourceService.getResourcesByCourseId(courseId);
        return ResponseEntity.ok(resources);
    }

    @PostMapping("/course/{courseId}")
    public ResponseEntity<Resource> createResource(@RequestBody Resource resource, @PathVariable Long courseId) {
        Resource newResource = resourceService.createResource(resource, courseId);
        return new ResponseEntity<>(newResource, HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Resource> updateResource(@PathVariable Long id, @RequestBody Resource resourceDetails) {
        Resource updatedResource = resourceService.updateResource(id, resourceDetails);
        return ResponseEntity.ok(updatedResource);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteResource(@PathVariable Long id) {
        resourceService.deleteResource(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}