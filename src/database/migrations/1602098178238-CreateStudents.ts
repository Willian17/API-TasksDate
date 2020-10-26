import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class CreateStudents1602098178238 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'students',
                columns: [
                    {
                        name: 'id',
                        type: 'uuid',
                        isPrimary: true,
                        generationStrategy: 'uuid',
                        default: 'uuid_generate_v4()'
                    },

                    {
                        name: 'registration',
                        type: 'bigint',
                        isUnique: true
                    },

                    {
                        name: 'name',
                        type: 'varchar',
                    },

                    {
                        name: 'surname',
                        type: 'varchar',
                    },

                    {
                        name: 'avatar',
                        type: 'varchar',
                    },

                    {
                        name: 'email',
                        type: 'varchar'
                    },
                    {
                        name: 'password',
                        type: 'varchar'
                    },
                    {
                        name: 'class_id',
                        type: 'uuid',
                        isNullable: true
                    }
                ]
            })
        )

        await queryRunner.createForeignKey('students', 
            new TableForeignKey({
                name: 'studentsClassId',
                columnNames: ['class_id'],
                referencedColumnNames: ['id'],
                referencedTableName: 'classes',
                onDelete: 'SET NULL',
                onUpdate: 'CASCADE'
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('students', 'studentsClassId')

        await queryRunner.dropTable('students')
    }

}
