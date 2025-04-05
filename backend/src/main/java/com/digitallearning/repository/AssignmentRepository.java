package com.digitallearning.repository;

import com.digitallearning.model.Assignment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AssignmentRepository extends JpaRepository<Assignment, Long> {
    // Additional query methods can be defined here if needed
}