import {MigrationInterface, QueryRunner} from "typeorm";

export class AlterDeliverydate1601911794251 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query('ALTER TABLE tasks ALTER COLUMN deliverydate TYPE timestamp;')
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query('ALTER TABLE tasks ALTER COLUMN deliverydate TYPE timestamp with time zone;')
    }

}
