import { Body, Controller, Get, Param, Patch, Post } from "@nestjs/common";

@Controller("applications")
export class ApplicationsController {
  @Post()
  create(@Body() body: Record<string, unknown>) {
    return { message: "Application submitted", body };
  }

  @Get(":id")
  status(@Param("id") id: string) {
    return { id, status: "UNDER_REVIEW" };
  }

  @Patch(":id/status")
  updateStatus(@Param("id") id: string, @Body() body: { status: string }) {
    return { id, status: body.status };
  }
}
