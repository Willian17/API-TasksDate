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
var typeorm_1 = require("typeorm");
var Students_1 = __importDefault(require("../models/Students"));
var bcryptjs_1 = require("bcryptjs");
var AppError_1 = __importDefault(require("../errors/AppError"));
var CreateStudentService = /** @class */ (function () {
    function CreateStudentService() {
    }
    CreateStudentService.prototype.execute = function (_a) {
        var name = _a.name, surname = _a.surname, email = _a.email, password = _a.password, registration = _a.registration, avatar = _a.avatar, class_id = _a.class_id;
        return __awaiter(this, void 0, void 0, function () {
            var studentRepository, checkEmailExists, checkRegistrationExists, hashedPassword, student;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        studentRepository = typeorm_1.getRepository(Students_1.default);
                        return [4 /*yield*/, studentRepository.findOne({ where: { email: email } })];
                    case 1:
                        checkEmailExists = _b.sent();
                        return [4 /*yield*/, studentRepository.findOne({ where: { registration: registration } })];
                    case 2:
                        checkRegistrationExists = _b.sent();
                        if (checkEmailExists) {
                            throw new AppError_1.default('Email já existe.', 400);
                        }
                        if (checkRegistrationExists) {
                            throw new AppError_1.default('Número de matrícula já existe.', 400);
                        }
                        return [4 /*yield*/, bcryptjs_1.hash(password, 10)];
                    case 3:
                        hashedPassword = _b.sent();
                        student = studentRepository.create({
                            name: name,
                            surname: surname,
                            email: email,
                            password: hashedPassword,
                            registration: registration,
                            avatar: avatar,
                            class_id: class_id
                        });
                        return [4 /*yield*/, studentRepository.save(student)];
                    case 4:
                        _b.sent();
                        return [2 /*return*/, student];
                }
            });
        });
    };
    return CreateStudentService;
}());
exports.default = CreateStudentService;
