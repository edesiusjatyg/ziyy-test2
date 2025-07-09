// prisma/seed.ts

import { PrismaClient } from '../src/generated/prisma/client';
import * as fs from 'fs';
import * as path from 'path';

const prisma = new PrismaClient();

const membersData = JSON.parse(
  // The path was also slightly incorrect, this is more robust
  fs.readFileSync(path.resolve(__dirname, '../public/realMembers.json'), 'utf-8')
);

async function main() {
  console.log(`Start seeding ...`);

  for (const member of membersData.members) {
    // Destructure the member object to separate the id from the rest of the data
    const { id, ...memberData } = member;

    const newMember = await prisma.member.create({
      data: {
        ...memberData,
        // Convert date strings to Date objects
        joinDate: new Date(memberData.joinDate),
        expiryDate: new Date(memberData.expiryDate),
      },
    });
    console.log(`Created member with name: ${newMember.name}`);
  }

  console.log(`Seeding finished.`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });