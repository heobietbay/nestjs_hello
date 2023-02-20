import { Body, Controller, Post } from "@nestjs/common";
import { AuthDto } from "./dto";
import { AuthService } from "./auth.service";

@Controller()
export class AuthController {
    constructor(private authService: AuthService) { }

    /**
     * This is to demonstrate how to code a pipe in nestjs. 
     * In this example, we are using a pipe to validate the email and password, to make sure they are string.
     * @param email email is a string
     * @param password password is a string
     * @returns 
     */
    @Post("nestjs-pipe-demo")
    pipeDemo(@Body("email") email: string,
             @Body("password") password: string) {
        return {
            email,
            typeOfEmail: typeof email,
            password,
            typeOfPassword: typeof password
        };
    }

    @Post("signup")
    signup(@Body() dto: AuthDto) {
        return this.authService.signup(dto);
    }

    @Post("signin")
    signin() {
        return this.authService.signin();
    }
}