"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var CreateClassesService_1 = __importDefault(require("../services/CreateClassesService"));
var CreateStudentService_1 = __importDefault(require("../services/CreateStudentService"));
var AuthenticateStudentService_1 = __importDefault(require("../services/AuthenticateStudentService"));
var CreateStudentTaskService_1 = __importDefault(require("../services/CreateStudentTaskService"));
var studentsRouter = express_1.Router();
studentsRouter.post('/signup', function (request, response) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, name, surname, email, password, registration, avatar, course, year, createClass, createStudent, createStudentTask, class_id, id, error_1;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = request.body, name = _a.name, surname = _a.surname, email = _a.email, password = _a.password, registration = _a.registration, avatar = _a.avatar, course = _a.course, year = _a.year;
                _b.label = 1;
            case 1:
                _b.trys.push([1, 5, , 6]);
                createClass = new CreateClassesService_1.default();
                createStudent = new CreateStudentService_1.default();
                createStudentTask = new CreateStudentTaskService_1.default();
                return [4 /*yield*/, createClass.execute({ course: course, year: year })];
            case 2:
                class_id = _b.sent();
                return [4 /*yield*/, createStudent.execute({ name: name, surname: surname, email: email, password: password, registration: registration, avatar: avatar, class_id: class_id })];
            case 3:
                id = (_b.sent()).id;
                return [4 /*yield*/, createStudentTask.execute({ class_id: class_id, student_id: id })];
            case 4:
                _b.sent();
                return [2 /*return*/, response.status(201).send()];
            case 5:
                error_1 = _b.sent();
                return [2 /*return*/, response.status(400).send(error_1.message)];
            case 6: return [2 /*return*/];
        }
    });
}); });
studentsRouter.post('/signin', function (request, response) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, email, password, authenticate, _b, token, user, error_2;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _a = request.body, email = _a.email, password = _a.password;
                _c.label = 1;
            case 1:
                _c.trys.push([1, 3, , 4]);
                authenticate = new AuthenticateStudentService_1.default();
                return [4 /*yield*/, authenticate.execute({ email: email, password: password })];
            case 2:
                _b = _c.sent(), token = _b.token, user = _b.user;
                return [2 /*return*/, response.json({ token: token, user: user })];
            case 3:
                error_2 = _c.sent();
                return [2 /*return*/, response.status(400).json({ error: error_2.message })];
            case 4: return [2 /*return*/];
        }
    });
}); });
exports.default = studentsRouter;
