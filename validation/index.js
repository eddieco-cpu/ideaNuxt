import { z } from "zod";

const commonErrorMessage = {
    required_error: "必填",
    invalid_type_error: "無效輸入",
};

const phoneRegex_TW = new RegExp(/^09\d{2}-?\d{3}-?\d{3}$/);
const passwordRegex = new RegExp(/^(?=.*[A-Z]).{8,}$/);
const emailRegex = new RegExp(/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/);

export const setPasswordSchema = z
    .object({
        password: z.string(commonErrorMessage).min(1, "必填"),
        newPassword: z
            .string(commonErrorMessage)
            .regex(passwordRegex, "請輸入長度至少為8個字元且含大寫字母")
            .min(1, "必填"),
        confirmPassword: z
            .string(commonErrorMessage)
            .regex(passwordRegex, "請輸入長度至少為8個字元且含大寫字母")
            .min(1, "必填"),
    })
    .refine((data) => data.newPassword === data.confirmPassword, {
        message: "密碼不相符合",
        path: ["confirmPassword"],
    });

export const addressSchema = z.object({
    name: z.string(commonErrorMessage).min(1, "必填"),
    phone: z.string(commonErrorMessage).regex(phoneRegex_TW, "請輸入有效手機號碼").min(1, "必填"),
    email: z.string(commonErrorMessage).regex(emailRegex, "請輸入有效電子信箱").min(1, "必填"),
    address: z.string(commonErrorMessage).min(1, "必填"),
});

export const memberInformationSchema = z.object({
    name: z.string(commonErrorMessage).min(1, "必填"),
    email: z.string(commonErrorMessage).regex(emailRegex, "請輸入有效電子信箱").min(1, "必填"),
});

export const leaderInformationSchema = z.object({
    siteName: z.string(commonErrorMessage).min(1, "必填"),
    selfDescription: z.string(commonErrorMessage).min(1, "必填"),
});

export const submissionSchema = z.object({
    name: z.string(commonErrorMessage).min(1, "必填"),
    email: z.string(commonErrorMessage).regex(emailRegex, "請輸入有效電子信箱").min(1, "必填"),
    projectName: z.string(commonErrorMessage).min(1, "必填"),
    projectDes: z.string(commonErrorMessage).min(1, "必填"),
    projectTargetValue: z
        .number()
        .gte(0, "請輸入大於等於零的數字")
        .or(
            z
                .string()
                .min(1, "必填")
                .transform((val) => {
                    if (val === "") throw new Error("必填");
                    const num = Number(val);
                    if (isNaN(num) || num < 0) throw new Error("請輸入大於等於零的數字");
                    return num;
                }),
        ),
    startDate: z
        .string()
        .regex(/^\d{2}\/\d{2}\/\d{4}$/, "請輸入有效的日期格式 MM/DD/YYYY")
        .transform((val) => {
            const [month, day, year] = val.split("/").map(Number);
            const date = new Date(year, month - 1, day);
            if (date.getFullYear() !== year || date.getMonth() + 1 !== month || date.getDate() !== day) {
                throw new Error("無效的日期");
            }
            return date;
        }),
    endDate: z
        .string()
        .regex(/^\d{2}\/\d{2}\/\d{4}$/, "請輸入有效的日期格式 MM/DD/YYYY")
        .transform((val) => {
            const [month, day, year] = val.split("/").map(Number);
            const date = new Date(year, month - 1, day);
            if (date.getFullYear() !== year || date.getMonth() + 1 !== month || date.getDate() !== day) {
                throw new Error("無效的日期");
            }
            return date;
        }),
});
