package com.digitallearning.model;

import jakarta.persistence.*; // Changed import
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Progress {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Integer completedLessons;

    private Integer totalLessons;

    private Double score;

    private LocalDateTime lastAccessed;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    @ManyToOne
    @JoinColumn(name = "course_id")
    private Course course;

    @PrePersist
    protected void onCreate() {
        this.lastAccessed = LocalDateTime.now();
    }

    @PreUpdate
    protected void onUpdate() {
        this.lastAccessed = LocalDateTime.now();
    }
}