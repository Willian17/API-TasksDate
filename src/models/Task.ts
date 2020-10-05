import { Entity ,PrimaryGeneratedColumn, Column } from 'typeorm'

@Entity('tasks')
class Task {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    title: string

    @Column('timestamp')
    deliverydate: Date | string

    @Column()
    subject: string
}

export default Task