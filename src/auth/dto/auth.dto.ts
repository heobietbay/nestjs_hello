import { Allow, IsEmail, IsNotEmpty } from "class-validator";

export class AuthDto {
    @IsEmail()
    @IsNotEmpty()
    email: string;

    @Allow()
    password: string;
}