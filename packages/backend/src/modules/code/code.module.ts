import {
	Module,
} from '@nestjs/common'
import {
	CodeService,
} from './code.service'
import {
	NodemailerModule,
} from 'src/modules/nodemailer/nodemailer.module'
import {
	PrismaService,
} from 'nestjs-prisma'
@Module({
	imports:   [NodemailerModule,],
	providers: [CodeService, PrismaService,],
	exports:   [CodeService,],
},)
export class CodeModule {}
