import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class CreateTasksStudents1602099924203 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'taskstudents',
                columns: [
                    {
                        name: 'id',
                        type: 'uuid',
                        isPrimary: true,
                        generationStrategy: 'uuid',
                        default: 'uuid_generate_v4()'
                    },

                    {
                        name: 'done',
                        type: 'boolean',
                        default: false
                    },
                    {
                        name: 'task_id',
                        type: 'uuid',
                    },
                    {
                        name: 'student_id',
                        type: 'uuid',
                    },
                ]
            }
        )
    )
        await queryRunner.createForeignKey('taskstudents', 
            new TableForeignKey({
                name: 'taskId',
                columnNames: ['task_id'],
                referencedColumnNames: ['id'],
                referencedTableName: 'tasks',
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE'
            })
        )

        await queryRunner.createForeignKey('taskstudents', 
            new TableForeignKey({
                name: 'studentsId',
                columnNames: ['student_id'],
                referencedColumnNames: ['id'],
                referencedTableName: 'students',
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE'
            })
        )    

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('taskstudents', 'taskId')
        await queryRunner.dropForeignKey('taskstudents', 'studentsId')

        await queryRunner.dropTable('taskstudents')
    }

}
