package com.crud.Login.service;

import com.crud.Login.dto.UserDTO;
import com.crud.Login.model.UserModel;
import com.crud.Login.repository.UserRepository;
import org.mindrot.jbcrypt.BCrypt;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserService {
    private UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public Object cadastrarUsuario(UserDTO userDTO) throws IllegalAccessException {
        if (!userDTO.getSenha().equals(userDTO.getConfirmarSenha())) {
            throw new IllegalAccessException("Senha e Confirmação diferentes");
        }
        Optional<UserModel> usuarioExistente = userRepository.findByEmail(userDTO.getEmail());
        if (usuarioExistente.isPresent()) {
            return "Usuário já existe";
        }
        UserModel novoUsuario = new UserModel();
        String senhaCriptografada = BCrypt.hashpw(userDTO.getSenha(), BCrypt.gensalt());
        novoUsuario.setEmail(userDTO.getEmail());
        novoUsuario.setSenha(senhaCriptografada);

        return userRepository.save(novoUsuario);
    }

    public String logar(String email, String senha) {
        Optional<UserModel> emailOpcional = userRepository.findByEmail(email);
        if (emailOpcional.isPresent()) {
            UserModel usuario = emailOpcional.get();
            if (BCrypt.checkpw(senha, usuario.getSenha())) {
                return "Usuário autenticado";
            }
        }
        return "Falha no login";
    }

    public Optional<UserModel> buscarUsuario(String email) {
        return userRepository.findByEmail(email);
    }
}