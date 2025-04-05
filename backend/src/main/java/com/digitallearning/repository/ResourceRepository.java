package com.digitallearning.repository;

import com.digitallearning.model.Resource;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ResourceRepository extends JpaRepository<Resource, Long> {
    // Additional query methods can be defined here if needed
}