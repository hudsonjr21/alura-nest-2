import { IsEmail, IsNotEmpty, IsOptional, IsString, MinLength } from "class-validator";
import { EmailUnico } from "../validacao/email-unico.validator";

export class AtualizaUsuarioDTO {

    @IsNotEmpty( { message: ('O Nome não pode ser vazio') } )
    @IsOptional()
    nome: string;

    @IsEmail( {},  { message: 'O e-mail informado é inválido' } )
    @EmailUnico({message: 'Já existe um usuário com esse e-mail!'})
    @IsOptional()
    email: string;

    @MinLength( 6, { message:('A senha precisa ter pelo menos 6 caracteres') } )
    @IsOptional()
    senha: string;

}