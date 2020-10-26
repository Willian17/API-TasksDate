import { Column, Entity, OneToMany } from "typeorm";
import { Students } from "./Students";
import { Tasks } from "./Tasks";

@Entity("classes", { schema: "public" })
export class Classes {
  @Column("uuid", {
    primary: true,
    name: "id",
    default: () => "uuid_generate_v4()",
  })
  id: string;

  @Column("character varying", {
    name: "level",
    default: () => "'ensino medio'",
  })
  level: string;

  @Column("character varying", { name: "course" })
  course: string;

  @Column("smallint", { name: "year" })
  year: number;

  @OneToMany(() => Students, (students) => students.class)
  students: Students[];

  @OneToMany(() => Tasks, (tasks) => tasks.class)
  tasks: Tasks[];
}

export default Classes
