"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Taskstudents = void 0;
var typeorm_1 = require("typeorm");
var Students_1 = require("./Students");
var Tasks_1 = require("./Tasks");
var Taskstudents = /** @class */ (function () {
    function Taskstudents() {
    }
    __decorate([
        typeorm_1.Column("uuid", {
            primary: true,
            name: "id",
            default: function () { return "uuid_generate_v4()"; },
        }),
        __metadata("design:type", String)
    ], Taskstudents.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column("boolean", { name: "done", default: function () { return "false"; } }),
        __metadata("design:type", Boolean)
    ], Taskstudents.prototype, "done", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Taskstudents.prototype, "student_id", void 0);
    __decorate([
        typeorm_1.ManyToOne(function () { return Students_1.Students; }, function (students) { return students.taskstudents; }, {
            onDelete: "CASCADE",
            onUpdate: "CASCADE",
        }),
        typeorm_1.JoinColumn([{ name: "student_id", referencedColumnName: "id" }]),
        __metadata("design:type", Students_1.Students)
    ], Taskstudents.prototype, "student", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Taskstudents.prototype, "task_id", void 0);
    __decorate([
        typeorm_1.ManyToOne(function () { return Tasks_1.Tasks; }, function (tasks) { return tasks.taskstudents; }, {
            onDelete: "CASCADE",
            onUpdate: "CASCADE",
        }),
        typeorm_1.JoinColumn([{ name: "task_id", referencedColumnName: "id" }]),
        __metadata("design:type", Tasks_1.Tasks)
    ], Taskstudents.prototype, "task", void 0);
    Taskstudents = __decorate([
        typeorm_1.Entity("taskstudents", { schema: "public" })
    ], Taskstudents);
    return Taskstudents;
}());
exports.Taskstudents = Taskstudents;
exports.default = Taskstudents;
