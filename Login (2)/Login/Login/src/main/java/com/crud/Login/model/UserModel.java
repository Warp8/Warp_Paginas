package com.crud.Login.model;


import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document (collection = "user")
public class UserModel {
    @Id
   private String id;
    @Email
    @NotBlank
    private String email;
    @NotBlank
    @Size (min = 5, max = 40)
    private String nome;
    @NotBlank
    @Size (min = 6)
    private String senha;
    @NotBlank
    @Size (min = 6)
    private String confirmarSenha;

    private String imgId;

 public String getConfirmarSenha() {
  return confirmarSenha;
 }

 public void setConfirmarSenha(String confirmarSenha) {
  this.confirmarSenha = confirmarSenha;
 }

 public String getId() {
  return id;
 }

 public void setId(String id) {
  this.id = id;
 }

 public String getEmail() {
  return email;
 }

 public void setEmail(String email) {
  this.email = email;
 }

 public String getNome() {
  return nome;
 }

 public void setNome(String nome) {
  this.nome = nome;
 }

 public String getSenha() {
  return senha;
 }

 public void setSenha(String senha) {
  this.senha = senha;
 }

 public String getImgId() {
  return imgId;
 }

 public void setImgId(String imgId) {
  this.imgId = imgId;
 }
}
