import { Role, SeasonStatus, Currency, LogCategory, TransactionType } from "@prisma/gen-client";
import { prisma } from '../src/infra/database/prisma';

async function main() {
    console.log(`🚀 Iniciando o seeding do Agrofy (Versão Expandida - 2+ itens por tabela)...`);

    // 1. Limpeza (Ordem inversa das dependências para evitar erros de FK)
    await prisma.finance.deleteMany();
    await prisma.transaction.deleteMany();
    await prisma.fieldLog.deleteMany();
    await prisma.season.deleteMany();
    await prisma.inventoryItem.deleteMany();
    await prisma.plot.deleteMany();
    await prisma.peopleOnFarms.deleteMany();
    await prisma.farm.deleteMany();
    await prisma.address.deleteMany();
    await prisma.manager.deleteMany();
    await prisma.people.deleteMany();
    await prisma.user.deleteMany();
    await prisma.crop.deleteMany();

    // 2. Criar Usuários, Pessoas e Gerentes (Mínimo 2)
    const adminUser1 = await prisma.user.create({
        data: {
            email: 'contato@luiz.com.br',
            password: 'hash_senha_segura_admin_1',
            people: {
                create: {
                    name: 'Luiz Carlos Marinho',
                    cellphone: '21999999999',
                    role: Role.ADMIN,
                    manager: { create: {} }
                }
            }
        },
        include: { people: { include: { manager: true } } }
    });

    const adminUser2 = await prisma.user.create({
        data: {
            email: 'juanildo@agrofy.com.br',
            password: 'hash_senha_segura_admin_2',
            people: {
                create: {
                    name: 'Juanildo Braga Oneil',
                    cellphone: '21988888888',
                    role: Role.MANAGER,
                    manager: { create: {} }
                }
            }
        },
        include: { people: { include: { manager: true } } }
    });

    const manager1Id = adminUser1.people?.manager?.id as string;
    const manager2Id = adminUser2.people?.manager?.id as string;

    // 3. Criar Endereços para as Fazendas (Mínimo 2)
    const addr1 = await prisma.address.create({
        data: {
            city: 'Maricá',
            state: 'RJ',
            neighborhood: 'Espraiado',
            street: 'Estrada do Espraiado',
            number: 1500,
            country: 'Brasil'
        }
    });

    const addr2 = await prisma.address.create({
        data: {
            city: 'Maricá',
            state: 'RJ',
            neighborhood: 'Ubatiba',
            street: 'Rua Principal de Ubatiba',
            number: 500,
            country: 'Brasil'
        }
    });

    // 4. Criar Fazendas (Farms) (Mínimo 2)
    const farm1 = await prisma.farm.create({
        data: {
            name: 'Sítio Recanto Verde',
            totalArea: 2.5,
            unity: 'ha',
            resume: 'Produção de folhosas e pimentas no Espraiado',
            addressId: addr1.id,
            peoples: {
                create: { peopleId: adminUser1.people?.id as string }
            }
        }
    });

    const farm2 = await prisma.farm.create({
        data: {
            name: 'Fazenda Sol Nascente',
            totalArea: 5.0,
            unity: 'ha',
            resume: 'Cultivo de hortaliças variadas em Ubatiba',
            addressId: addr2.id,
            peoples: {
                create: { peopleId: adminUser2.people?.id as string }
            }
        }
    });

    // 5. Criar Lotes (Plots) (Mínimo 2 por fazenda)
    const plot1 = await prisma.plot.create({
        data: {
            name: 'Canteiro das Alfaces',
            area: 500,
            unity: 'm2',
            soilType: 'Arenoso',
            farmId: farm1.id
        }
    });

    const plot2 = await prisma.plot.create({
        data: {
            name: 'Estufa de Pimentas',
            area: 300,
            unity: 'm2',
            soilType: 'Argiloso',
            farmId: farm1.id
        }
    });

    const plot3 = await prisma.plot.create({
        data: {
            name: 'Campo Aberto Sul',
            area: 1200,
            unity: 'm2',
            soilType: 'Misto',
            farmId: farm2.id
        }
    });

    // 6. Criar Culturas (Crops) (Mínimo 2)
    const crop1 = await prisma.crop.create({
        data: {
            name: 'Alface Crespa',
            variety: 'Vanda',
            daysToHarvest: 45,
            observation: 'Variedade resistente ao calor de Maricá'
        }
    });

    const crop2 = await prisma.crop.create({
        data: {
            name: 'Pimenta de Bico',
            variety: 'Amarela',
            daysToHarvest: 120,
            observation: 'Ideal para conservas gourmet'
        }
    });

    // 7. Criar Safras (Seasons) (Mínimo 2)
    const season1 = await prisma.season.create({
        data: {
            status: SeasonStatus.GROWING,
            plotId: plot1.id,
            cropId: crop1.id,
            harvestAt: new Date('2026-05-20')
        }
    });

    const season2 = await prisma.season.create({
        data: {
            status: SeasonStatus.PLANTED,
            plotId: plot2.id,
            cropId: crop2.id,
            harvestAt: new Date('2026-08-15')
        }
    });

    // 8. Criar Logs de Campo (Mínimo 2 por temporada)
    await prisma.fieldLog.create({
        data: {
            description: 'Aplicação de adubo orgânico de compostagem local.',
            category: LogCategory.OBSERVATION,
            seasonId: season1.id
        }
    });

    await prisma.fieldLog.create({
        data: {
            description: 'Forte calor registrado. Irrigação intensificada.',
            category: LogCategory.WEATHER,
            seasonId: season1.id
        }
    });

    await prisma.fieldLog.create({
        data: {
            description: 'Preparação do solo concluída com calcário.',
            category: LogCategory.OBSERVATION,
            seasonId: season2.id
        }
    });

    // 9. Criar Itens de Estoque (Mínimo 2 por fazenda)
    await prisma.inventoryItem.create({
        data: {
            name: 'Adubo NPK 10-10-10',
            category: 'FERTILIZER',
            quantity: 50,
            unit: 'KG',
            minStock: 10,
            farmId: farm1.id
        }
    });

    await prisma.inventoryItem.create({
        data: {
            name: 'Semente Alface Vanda',
            category: 'SEED',
            quantity: 500,
            unit: 'G',
            minStock: 100,
            farmId: farm1.id
        }
    });

    await prisma.inventoryItem.create({
        data: {
            name: 'Substrato Orgânico',
            category: 'INPUT',
            quantity: 100,
            unit: 'KG',
            minStock: 20,
            farmId: farm2.id
        }
    });

    // 10. Criar Transações (Financeiro) (Mínimo 2 por gestor)
    // Transações Gerente 1
    await prisma.transaction.create({
        data: {
            description: 'Compra de bandejas para mudas',
            amount: 150.00,
            type: TransactionType.EXPENSE,
            currency: Currency.MUMBUCA,
            category: 'SUPPLIES',
            managerId: manager1Id,
            seasonId: season1.id
        }
    });

    await prisma.transaction.create({
        data: {
            description: 'Venda de Alface - Mercado Municipal',
            amount: 800.00,
            type: TransactionType.INCOME,
            currency: Currency.MUMBUCA,
            category: 'SALES',
            managerId: manager1Id,
            seasonId: season1.id
        }
    });

    // Transações Gerente 2
    await prisma.transaction.create({
        data: {
            description: 'Manutenção de trator leve',
            amount: 500.00,
            type: TransactionType.EXPENSE,
            currency: Currency.BRL,
            category: 'MAINTENANCE',
            managerId: manager2Id
        }
    });

    await prisma.transaction.create({
        data: {
            description: 'Subsídio Agrícola Municipal',
            amount: 2000.00,
            type: TransactionType.INCOME,
            currency: Currency.MUMBUCA,
            category: 'GOV',
            managerId: manager2Id
        }
    });

    // 11. Saldo Consolidado (Finance) (Mínimo 2)
    await prisma.finance.create({
        data: {
            balance: 650.00, // 800 - 150
            currency: Currency.MUMBUCA,
            managerId: manager1Id
        }
    });

    await prisma.finance.create({
        data: {
            balance: 1500.00, // Saldo inicial ajustado para o exemplo
            currency: Currency.BRL,
            managerId: manager2Id
        }
    });

    console.log(`✅ Seeding expandido finalizado com sucesso!`);
    console.log(`👤 Admin 1: ${adminUser1.email} | Manager: ${manager1Id}`);
    console.log(`👤 Admin 2: ${adminUser2.email} | Manager: ${manager2Id}`);
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