import { Entity ,PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm'

@Entity('tasks')
class Task {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    title: string

    @CreateDateColumn()
    deliverydate: Date

    @Column()
    subject: string
}

export default Task