import { ForbiddenException, Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { AuthDto } from "./dto";
import * as argon from "argon2";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime";

@Injectable()
export class AuthService {
  constructor(private prismaService: PrismaService) { }

  async signup(dto: AuthDto) {
    // generate password hash
    const hash = await argon.hash(dto.password);

    try {
      // save user to database
      const user = await this.prismaService.user.create({
        data: {
          email: dto.email,
          hash,
        },
        select: {
          id: true,
          email: true,
          createdAt: true,
        }
      });
  
      return user;
    }
    catch (err) {
      if (err instanceof PrismaClientKnownRequestError) {
        if (err.code === "P2002") {
          // duplicate user error
          throw new ForbiddenException("User already exists");
        }
      }
      throw err;
    }
  }
  signin() {
    return "signin";
  }
}