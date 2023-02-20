import { Body, Controller, Post } from "@nestjs/common";
import { AuthDto } from "./dto";
import { AuthService } from "./auth.service";

@Controller()
export class AuthController {
    constructor(private authService: AuthService) { }

    @Post("signup")
    signup(@Body() dto: AuthDto) {
        return this.authService.signup();
    }

    @Post("signin")
    signin() {
        return this.authService.signin();
    }
}