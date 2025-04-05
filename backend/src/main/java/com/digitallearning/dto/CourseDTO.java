package com.digitallearning.dto;

import javax.validation.constraints.NotBlank;

public class CourseDTO {
    
    @NotBlank
    private String title;

    @NotBlank
    private String description;

    private String instructor;

    private String[] tags;

    public CourseDTO() {
    }

    public CourseDTO(String title, String description, String instructor, String[] tags) {
        this.title = title;
        this.description = description;
        this.instructor = instructor;
        this.tags = tags;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getInstructor() {
        return instructor;
    }

    public void setInstructor(String instructor) {
        this.instructor = instructor;
    }

    public String[] getTags() {
        return tags;
    }

    public void setTags(String[] tags) {
        this.tags = tags;
    }
}