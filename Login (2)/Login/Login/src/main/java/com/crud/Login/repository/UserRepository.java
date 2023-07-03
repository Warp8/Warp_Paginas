package com.crud.Login.repository;

import com.crud.Login.model.UserModel;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends MongoRepository<UserModel, String> {
    Optional<UserModel> findByEmail(String email);
    boolean existsByEmail(String email);
    Optional<UserModel> findById(String id);
}