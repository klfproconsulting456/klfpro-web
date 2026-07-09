import { Body, Controller, Get, Post, Request, UploadedFile, UseGuards, UseInterceptors, BadRequestException, UnauthorizedException } from "@nestjs/common";
import { FileInterceptor } from "@nestjs/platform-express";
import { diskStorage } from "multer";
import { extname } from "path";
import { JwtAuthGuard } from "../auth/jwt-auth.guard";
import { DocumentsService } from "./documents.service";

@Controller("documents")
@UseGuards(JwtAuthGuard)
export class DocumentsController {
  constructor(private readonly documentsService: DocumentsService) {}

  @Get()
  async getMyDocuments(@Request() req: any) {
    const phone = req.user?.phone;
    if (!phone) throw new UnauthorizedException("Invalid token");
    return this.documentsService.getDocumentsForUser(phone);
  }

  @Post("upload")
  @UseInterceptors(
    FileInterceptor("file", {
      storage: diskStorage({
        destination: "./uploads",
        filename: (req, file, callback) => {
          const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
          const ext = extname(file.originalname);
          callback(null, `${file.fieldname}-${uniqueSuffix}${ext}`);
        },
      }),
      limits: {
        fileSize: 5 * 1024 * 1024, // 5MB
      },
      fileFilter: (req, file, callback) => {
        if (!file.mimetype.match(/\/(jpg|jpeg|png|pdf)$/)) {
          return callback(new BadRequestException("Only PDF, JPG, or PNG files are allowed!"), false);
        }
        callback(null, true);
      },
    }),
  )
  async uploadDocument(
    @Request() req: any,
    @UploadedFile() file: Express.Multer.File,
    @Body() body: { leadId: string; name: string; type: string }
  ) {
    if (!file) {
      throw new BadRequestException("File is required");
    }
    const { leadId, name, type } = body;
    if (!leadId || !name || !type) {
      throw new BadRequestException("leadId, name, and type are required");
    }

    const fileUrl = `/uploads/${file.filename}`;
    return this.documentsService.uploadDocument(leadId, name, type, fileUrl);
  }
}
