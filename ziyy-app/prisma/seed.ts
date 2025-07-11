// prisma/seed.ts

import {
  PrismaClient,
  MembershipType,
  MemberStatus,
} from '../src/generated/prisma/client';
import * as fs from 'fs';
import * as path from 'path';

const prisma = new PrismaClient();

// Helper function to read and parse the JSON file
function readJsonData(filePath: string): any[] {
  const absolutePath = path.resolve(__dirname, filePath);
  if (!fs.existsSync(absolutePath)) {
    console.warn(`File not found: ${absolutePath}. Skipping.`);
    return [];
  }
  try {
    const fileContent = JSON.parse(fs.readFileSync(absolutePath, 'utf-8'));
    // Assumes the data is in a root key like "members"
    const dataKey = Object.keys(fileContent)[0]; 
    return fileContent[dataKey] || [];
  } catch (error) {
    console.error(`Error reading or parsing ${absolutePath}:`, error);
    return [];
  }
}

async function main() {
  // 1. Delete all existing members to prevent duplicates
  console.log('Deleting existing members...');
  await prisma.member.deleteMany({});
  console.log('Existing members deleted.');

  // 2. Read the cleaned JSON data
  console.log('Reading member data from JSON...');
  const membersData = readJsonData('../public/seedMembers.json');
  
  if (membersData.length > 0) {
    console.log(`Starting to seed ${membersData.length} members...`);
    // 3. Create a new record for each member in the JSON file
    for (const member of membersData) {
      
      // Data transformation to match the schema
      const membershipEnum = (member.membership?.toUpperCase() || 'PERSONAL') as keyof typeof MembershipType;
      const statusEnum = (member.status?.toUpperCase() || 'EXPIRED') as keyof typeof MemberStatus;

      await prisma.member.create({
        data: {
          name: member.name,
          nik: member.nik || "",
          phone: member.phone || "",
          ptAmount: member.ptAmount ? parseInt(member.ptAmount, 10) : null,
          joinDate: new Date(member.joinDate),
          expiryDate: new Date(member.expiryDate),
          membership: MembershipType[membershipEnum],
          status: MemberStatus[statusEnum],
        },
      });
    }
    console.log(`${membersData.length} members have been seeded successfully.`);
  } else {
    console.log('No member data found to seed.');
  }

  // You can add plain seeding for other tables here in the same way
  // Example:
  // await prisma.canteenItem.deleteMany({});
  // for (const item of canteenItems) { ... await prisma.canteenItem.create({ ... }) }

  console.log('Seeding finished.');
}

main()
  .catch((e) => {
    console.error("Seeding error:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });