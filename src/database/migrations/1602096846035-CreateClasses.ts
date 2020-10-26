import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateClasses1602096846035 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'classes',
                columns: [
                    {
                        name: 'id',
                        type: 'uuid',
                        isPrimary: true,
                        generationStrategy: 'uuid',
                        default: 'uuid_generate_v4()'
                    },

                    {
                        name: 'level',
                        type: 'varchar',
                        default: "'ensino medio'"
                    },

                    {
                        name: 'course',
                        type: 'varchar',
                    },

                    {
                        name: 'year',
                        type: 'smallint',
                    },
                ]
            }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('classes')
    }

}
