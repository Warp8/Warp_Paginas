package com.crud.Login.controller;

import com.crud.Login.dto.UserDTO;
import com.crud.Login.model.UserModel;
import com.crud.Login.service.UserService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@CrossOrigin(origins = "*", methods = {RequestMethod.GET, RequestMethod.PUT, RequestMethod.DELETE, RequestMethod.POST})
@RestController
@RequestMapping("/Warp8")
public class UserController {
    private UserService userService;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

    @CrossOrigin
    @PostMapping("/cadastro")
    public ResponseEntity<Object> cadastroUsuario(@RequestBody @Valid UserDTO userDTO) {
        try {
            return ResponseEntity.status(HttpStatus.CREATED).body(userService.cadastrarUsuario(userDTO));
        } catch (IllegalAccessException e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
        }
    }

    @CrossOrigin
    @PostMapping("/login")
    public ResponseEntity<Object> loginUsuario(@RequestBody @Valid UserDTO userDTO) {
        Optional<UserModel> acessoLogin = userService.buscarUsuario(userDTO.getEmail());
        if (acessoLogin.isPresent()) {
            String resultadoLogin = userService.logar(userDTO.getEmail(), userDTO.getSenha());
            if (resultadoLogin.equals("Usuário autenticado")) {
                return ResponseEntity.status(HttpStatus.OK).body(acessoLogin);
            } else {
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(resultadoLogin);
            }
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Usuário não encontrado");
        }
    }
}