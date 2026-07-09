import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

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
    // eslint-disable-next-line no-console
    console.error(error);
    await prisma.$disconnect();
    process.exit(1);
  });
