import { z } from "zod";

const commonErrorMessage = {
    required_error: "必填",
    invalid_type_error: "無效輸入",
};

const phoneRegex_TW = new RegExp(/^09\d{2}-?\d{3}-?\d{3}$/);
const passwordRegex = new RegExp(/^(?=.*[A-Z]).{8,}$/);

export const loginSchema = z.object({
    phone: z.string(commonErrorMessage).regex(phoneRegex_TW, "請輸入有效手機號碼"),
    password: z.string(commonErrorMessage).regex(passwordRegex, "請輸入長度至少為8個字元且含大寫字母"),
});

export const setPasswordSchema = z
    .object({
        currentPassword: z.string(commonErrorMessage).regex(phoneRegex_TW, "請輸入有效手機號碼"),
        password: z.string(commonErrorMessage).regex(passwordRegex, "請輸入長度至少為8個字元且含大寫字母"),
        confirmPassword: z.string(commonErrorMessage).regex(passwordRegex, "請輸入長度至少為8個字元且含大寫字母"),
    })
    .refine((data) => data.password === data.confirmPassword, {
        message: "密碼不相符合",
        path: ["confirmPassword"],
    });
