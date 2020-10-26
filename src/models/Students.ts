import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { Classes } from "./Classes";
import { Taskstudents } from "./TaskStudents";

@Index("UQ_13e880a37642d39be55a6bb49ff", ["registration"], { unique: true })
@Entity("students", { schema: "public" })
export class Students {
  @Column("uuid", {
    primary: true,
    name: "id",
    default: () => "uuid_generate_v4()",
  })
  id: string;

  @Column("int8", { name: "registration", unique: true })
  registration: number;

  @Column("character varying", { name: "name" })
  name: string;

  @Column("character varying", { name: "surname" })
  surname: string;

  @Column("character varying", { name: "avatar" })
  avatar: string;

  @Column("character varying", { name: "email" })
  email: string;

  @Column("character varying", { name: "password" })
  password?: string;

  @Column()
  class_id: String;

  @ManyToOne(() => Classes )
  @JoinColumn({ name: "class_id"})
  class: Classes;

  @OneToMany(() => Taskstudents, (taskstudents) => taskstudents.student)
  taskstudents: Taskstudents[];
}

export default Students