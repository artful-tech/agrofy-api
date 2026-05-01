import { PrismaPg } from '@prisma/adapter-pg'
import { PrismaClient } from '@prisma/client'


const pool: PrismaPg = new PrismaPg({ connectionString: process.env.DATABASE_URL! })

export const prisma: PrismaClient = new PrismaClient({ adapter: pool })
