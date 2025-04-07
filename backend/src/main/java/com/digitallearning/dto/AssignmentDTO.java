package com.digitallearning.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class AssignmentDTO {
    private Long id;
    private String title;
    private String description;
    private Integer maxScore;
    private LocalDateTime dueDate;
    private Long courseId;
}