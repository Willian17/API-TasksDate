import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import { Students } from "./Students";
import { Tasks } from "./Tasks";

@Entity("taskstudents", { schema: "public" })
export class Taskstudents {
  @Column("uuid", {
    primary: true,
    name: "id",
    default: () => "uuid_generate_v4()",
  })
  id: string;

  @Column("boolean", { name: "done", default: () => "false" })
  done: boolean;

  @Column()
  student_id: String

  @ManyToOne(() => Students, (students) => students.taskstudents, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "student_id", referencedColumnName: "id" }])
  student: Students;

  @Column()
  task_id: String

  @ManyToOne(() => Tasks, (tasks) => tasks.taskstudents, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "task_id", referencedColumnName: "id" }])
  task: Tasks;
}

export default Taskstudents
