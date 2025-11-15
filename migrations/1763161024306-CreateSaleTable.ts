import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateSaleTable1763161024306 implements MigrationInterface {
    name = 'CreateSaleTable1763161024306'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`sale\` (\`id\` int NOT NULL, \`total\` decimal(10,2) NOT NULL, \`customer_id\` int NULL, \`employee_id\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`sale\` ADD CONSTRAINT \`FK_89809b48d46cc3eae0565c016e4\` FOREIGN KEY (\`customer_id\`) REFERENCES \`customer\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`sale\` ADD CONSTRAINT \`FK_667f785b671873c471e903e8f16\` FOREIGN KEY (\`employee_id\`) REFERENCES \`employee\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`sale\` DROP FOREIGN KEY \`FK_667f785b671873c471e903e8f16\``);
        await queryRunner.query(`ALTER TABLE \`sale\` DROP FOREIGN KEY \`FK_89809b48d46cc3eae0565c016e4\``);
        await queryRunner.query(`DROP TABLE \`sale\``);
    }

}
