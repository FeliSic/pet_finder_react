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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendEmail = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
const path_1 = __importDefault(require("path"));
dotenv_1.default.config({ path: path_1.default.resolve(__dirname, '../../.env') });
console.log('RESEND_KEY:', process.env.RESEND_KEY);
const resend_1 = require("resend");
const resend = new resend_1.Resend(process.env.RESEND_KEY);
const sendEmail = (emailData) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { data, error } = yield resend.emails.send({
            from: 'Pet Finder <onboarding@resend.dev>', // Cambiar cuando tengas dominio propio
            to: emailData.to,
            subject: emailData.subject,
            html: emailData.html,
        });
        if (error) {
            console.error('Error al enviar email:', error);
            throw error;
        }
        console.log('Email enviado exitosamente:', data);
        return data;
    }
    catch (error) {
        console.error('Error en sendEmail:', error);
        throw error;
    }
});
exports.sendEmail = sendEmail;
