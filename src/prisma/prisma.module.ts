import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Global() // thanks to this, we can import this module in any other module without specifically adding to providers
@Module({
  providers: [PrismaService],
  exports: [PrismaService],
})
export class PrismaModule {}
