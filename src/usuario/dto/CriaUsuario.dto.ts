import { IsEmail, IsNotEmpty, IsString, MinLength } from "class-validator";

export class CriaUsuarioDTO {

    @IsNotEmpty( { message: ('O Nome não pode ser vazio') } )
    nome: string;

    @IsEmail( {},  { message: 'O e-mail informado é inválido' } )
    email: string;

    @MinLength( 6, { message:('A senha precisa ter pelo menos 6 caracteres') } )
    senha: string;

}