import { z } from "zod";

const commonErrorMessage = {
    required_error: "必填",
    invalid_type_error: "無效輸入",
};

const phoneRegex_TW = new RegExp(/^09\d{2}-?\d{3}-?\d{3}$/);
const passwordRegex = new RegExp(/^(?=.*[A-Z]).{8,}$/);
const emailRegex = new RegExp(/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/);
const urlPattern = new RegExp(
    "^(https?:\\/\\/)?" + // 協議
        "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // 域名
        "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR IP (v4) address
        "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
        "(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
        "(\\#[-a-z\\d_]*)?$",
    "i",
); // fragment locator

const dateSchema = z.union([
    z
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
    z.date(),
]);

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
    selfDescription: z.string(commonErrorMessage).min(1, "必填").max(250, "字數超過限制"),
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
    startDate: dateSchema,
    endDate: dateSchema,
    projectDetailsDes: z.string(commonErrorMessage).min(1, "必填"),
    imgDataQuantity: z.number().min(1, { message: "必須大於等於 1 張" }).max(5, { message: "數值必須小於等於 5 張" }),
    relatedWebsite: z
        .string()
        .min(1, "必填")
        .refine((value) => urlPattern.test(value), {
            message: "無效的網址格式",
        }),
});

export const basicProjectDataSchema = z.object({
    name: z.string(commonErrorMessage).min(1, "必填"),
    email: z.string(commonErrorMessage).regex(emailRegex, "請輸入有效電子信箱").min(1, "必填"),
    projectName: z.string(commonErrorMessage).min(1, "必填"),
    projectDes: z.string(commonErrorMessage).min(1, "必填"),
    projectWebsiteName: z.string(commonErrorMessage).min(1, "必填"),
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
    startDate: dateSchema,
    endDate: dateSchema,
    projectDetailsDes: z.string(commonErrorMessage).min(1, "必填"),
    imgDataQuantity: z.number().min(1, { message: "必須大於等於 1 張" }).max(5, { message: "數值必須小於等於 5 張" }),
});

export const basicFaqSchema = z.object({
    qus: z.string(commonErrorMessage).min(1, "必填"),
    ans: z.string(commonErrorMessage).min(1, "必填"),
});

export const basicProgressSchema = z.object({
    title: z.string().min(1, "必填"),
    content: z
        .string()
        .min(1, "必填")
        .refine(
            (content) => {
                // 使用正則表達式去除 HTML 標籤
                const plainText = content.replace(/<[^>]+>/g, "").trim();
                // 檢查去除標籤後的內容是否仍有非空字符
                return plainText.length > 0;
            },
            {
                // 如果沒有通過檢查，顯示錯誤信息
                message: "內容不能僅包含 HTML 標籤",
            },
        ),
});

export const checkOutSchema = z.object({
    name: z.string(commonErrorMessage).min(1, "必填"),
    isAgree: z.boolean({
        required_error: "必填",
    }),
});
export const proposalSchema = z.object({
    projectName: z.string(commonErrorMessage).min(1, "必填"),
    originalPrice: z
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
    specialOffer: z
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

    deliveryTime: dateSchema,

    content: z.string(commonErrorMessage).min(1, "必填"),

    deliveryWays: z.array(z.string()).min(1, "You must select at least one delivery way."),

    imgDataQuantity: z.number().refine((value) => value === 1, {
        message: "必需上傳 1 張圖片",
    }),

    salesLimit: z.boolean(),
    salesLimitedQuantity: z.number().min(1, { message: "必須大於等於 1" }).nullable(),
});
