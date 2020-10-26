import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from "typeorm";
import { Classes } from "./Classes";
import { Taskstudents } from "./TaskStudents";

@Entity("tasks", { schema: "public" })
export class Tasks {
  @Column("uuid", {
    primary: true,
    name: "id",
    default: () => "uuid_generate_v4()",
  })
  id: string;

  @Column("character varying", { name: "title" })
  title: string;

  @Column("timestamp without time zone", { name: "deliverydate" })
  deliverydate: Date | string;

  @Column("character varying", { name: "subject" })
  subject: string;

  @Column()
  class_id: String;

  @ManyToOne(() => Classes)
  @JoinColumn({ name: "class_id"})
  class: Classes;

  @OneToMany(() => Taskstudents, (taskstudents) => taskstudents.task)
  taskstudents: Taskstudents[];
}

export default Tasks
