import { prisma } from '../src/infra/database/prisma';


async function main() {
    console.log(`🚀 Iniciando o seeding do Agrofy...`);

    // Limpar dados existentes para evitar duplicidade (Ordem inversa das Fks)
    await prisma.user.deleteMany();
    await prisma.expense.deleteMany();
    await prisma.inventoryItem.deleteMany();
    await prisma.fieldLog.deleteMany();
    await prisma.season.deleteMany();
    await prisma.plot.deleteMany();
    await prisma.crop.deleteMany();
    await prisma.farm.deleteMany();

    const user1 = await prisma.user.create({
        data: {
            name: 'Luiz Carlos',
            email: 'contato@luiz.com.br'
        }
    });

    const user2 = await prisma.user.create({
        data: {
            name: 'Juanildo Braga Oneil',
            email: 'juanildo@gmail.com'
        }
    });

    // 1. Criar Fazendas (Farms)
    const farm1 = await prisma.farm.create({
        data: {
            name: 'Sítio Recanto Verde',
            ownerName: 'Luiz Silva',
            totalArea: 2500,
            location: 'Espraiado',
            address: 'Estrada do Espraiado, km 4',
        }
    });

    const farm2 = await prisma.farm.create({
        data: {
            name: 'Fazenda Sol Nascente',
            ownerName: 'Marcia Oliveira',
            totalArea: 5000,
            location: 'Ubatiba',
            address: 'Rua Principal de Ubatiba',
        }
    });

    // 2. Criar Lotes (Plots)
    const plot1 = await prisma.plot.create({
        data: {
            name: 'Canteiro A1 - Estufa',
            area: 500,
            soilType: 'Arenoso',
            farmId: farm1.id,
        }
    });

    const plot2 = await prisma.plot.create({
        data: {
            name: 'Lote Norte - Aberto',
            area: 1200,
            soilType: 'Argiloso',
            farmId: farm2.id,
        }
    });

    // 3. Criar Culturas (Crops)
    const crop1 = await prisma.crop.create({
        data: {
            name: 'Alface Crespa',
            variety: 'Vanda',
            daysToHarvest: 45,
        }
    });

    const crop2 = await prisma.crop.create({
        data: {
            name: 'Pimenta de Bico',
            variety: 'Amarela',
            daysToHarvest: 120,
        }
    });

    // 4. Criar Safras (Seasons)
    const season1 = await prisma.season.create({
        data: {
            status: 'GROWING',
            plotId: plot1.id,
            cropId: crop1.id,
            harvestAt: new Date('2026-04-15'),
        }
    });

    // 5. Criar Logs de Campo (FieldLogs)
    await prisma.fieldLog.create({
        data: {
            description: 'Chuva forte registrada na madrugada. Drenagem operando bem.',
            category: 'WEATHER',
            seasonId: season1.id,
        }
    });

    // 6. Criar Itens de Estoque (InventoryItems)
    await prisma.inventoryItem.create({
        data: {
            name: 'Semente Alface Vanda',
            category: 'SEED',
            quantity: 500,
            unit: 'g',
            minStock: 100,
        }
    });

    await prisma.inventoryItem.create({
        data: {
            name: 'Adubo Orgânico NPK',
            category: 'FERTILIZER',
            quantity: 15,
            unit: 'kg',
            minStock: 20,
        }
    });

    // 7. Criar Despesas (Expenses)
    await prisma.expense.create({
        data: {
            description: 'Compra de Sementes - Feira Agricultura Familiar',
            amount: 120.50,
            currency: 'MUMBUCA',
            category: 'SEED',
        }
    });

    await prisma.expense.create({
        data: {
            description: 'Manutenção de Sistema de Irrigação',
            amount: 350.00,
            currency: 'BRL',
            category: 'MAINTENANCE',
        }
    });

    console.log(`✅ Seeding finalizado com sucesso!`);
}

main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });