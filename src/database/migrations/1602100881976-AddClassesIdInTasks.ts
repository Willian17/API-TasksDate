import {MigrationInterface, QueryRunner, TableColumn, TableForeignKey} from "typeorm";

export class AddClassesIdInTasks1602100881976 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn('tasks',
            new TableColumn({
                name: 'class_id',
                type: 'uuid'
            })
        )

        await queryRunner.createForeignKey('tasks', 
            new TableForeignKey({
                name: 'tasksClassesId',
                columnNames: ['class_id'],
                referencedColumnNames: ['id'],
                referencedTableName: 'classes',
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE'
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('tasks', 'tasksClassesId')

        await queryRunner.dropColumn('tasks', 'class_id')
    }

}
