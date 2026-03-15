import { PrismaClient } from "@prisma/gen-client";  

export class PlotRepository {
    constructor(private prisma: PrismaClient) {

    }
 async findAll() {
    return this.prisma.plot.findMany({
        
    });
 }
}