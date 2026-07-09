"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
async function main() {
    const loanTypes = [
        "home-loan",
        "business-loan",
        "personal-loan",
        "loan-against-property",
        "car-loan",
        "msme-loan",
        "loan-against-virtual-unit",
        "commercial-property-loan"
    ];
    for (const slug of loanTypes) {
        await prisma.loanType.upsert({
            where: { slug },
            update: {},
            create: {
                slug,
                title: slug.replaceAll("-", " ")
            }
        });
    }
}
void main()
    .then(async () => {
    await prisma.$disconnect();
})
    .catch(async (error) => {
    console.error(error);
    await prisma.$disconnect();
    process.exit(1);
});
//# sourceMappingURL=seed.js.map