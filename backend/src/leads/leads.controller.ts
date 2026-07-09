import { Body, Controller, Get, Post, Query, Request, UseGuards, UnauthorizedException, Param } from "@nestjs/common";
import { JwtAuthGuard } from "../auth/jwt-auth.guard";
import { CreateLeadDto } from "./dto/create-lead.dto";
import { LeadsService } from "./leads.service";

@Controller("leads")
export class LeadsController {
  constructor(private readonly leads: LeadsService) {}

  @Get()
  list(@Query("take") take?: string) {
    const n = take ? Number.parseInt(take, 10) : 50;
    return this.leads.listRecent(Number.isFinite(n) ? Math.min(Math.max(n, 1), 100) : 50);
  }

  @Post()
  create(@Body() dto: CreateLeadDto) {
    return this.leads.create(dto);
  }

  @UseGuards(JwtAuthGuard)
  @Get("my-applications")
  getMyLeads(@Request() req: any) {
    const phone = req.user.phone;
    if (!phone) throw new UnauthorizedException("Invalid token payload");
    return this.leads.findByPhone(phone);
  }

  @Get("seo-pages/all")
  async getAllSeoPages() {
    return this.leads.getAllSeoPages();
  }

  @Get("seo-page/:slug")
  async getSeoPage(@Param("slug") slug: string) {
    // For Enterprise Programmatic SEO, fetch from SeoPage model.
    // If it doesn't exist, generate a fallback or return 404.
    const page = await this.leads.getSeoPage(slug);
    if (!page) {
      // Return 404 so Next.js handles it properly
      throw new UnauthorizedException("Page not found"); // Or NotFoundException
    }
    return page;
  }
}
