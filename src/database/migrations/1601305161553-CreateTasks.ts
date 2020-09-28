import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateTasks1601305161553 implements MigrationInterface {
    
    public async up(queryRunner: QueryRunner): Promise<void> {
       await queryRunner.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"')

       await queryRunner.createTable(
            new Table({
                name: 'tasks',
                columns:[
                    {
                        name: 'id',
                        type: 'uuid',
                        isPrimary: true,
                        generationStrategy: 'uuid',
                        default: 'uuid_generate_v4()'
                    },

                    {
                        name: 'title',
                        type: 'varchar'
                    },

                    {
                        name: 'deliverydate',
                        type: 'timestamp with time zone'
                    },

                    {
                        name: 'subject',
                        type: 'varchar'
                    }
                ]
            })
         )
        }
        
        public async down(queryRunner: QueryRunner): Promise<void> {
            await queryRunner.dropTable('tasks')
        }
        
    }
    