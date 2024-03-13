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
    projectDetailsDes: z.string(commonErrorMessage).min(1, "必填"),
});

export const basicProjectDataSchema = z.object({
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
    projectDetailsDes: z.string(commonErrorMessage).min(1, "必填"),
});

export const basicFaqSchema = z.object({
    qus: z.string(commonErrorMessage).min(1, "必填"),
    ans: z.string(commonErrorMessage).min(1, "必填"),
});

export const proposalSchema = z
    .object({
        projectName: z.string(commonErrorMessage).min(1, "必填"),
        // projectImg: z
        //     .object({
        //         name: z.string(),
        //         type: z.string().refine((type) => type.startsWith("image/"), {
        //             message: "Project image must be an image", // 不是图像类型
        //         }),
        //         size: z.number().refine((size) => size <= 500 * 1024, {
        //             // 限制文件大小不超过 500KB
        //             message: "Project image must be 500KB or less", // 文件大小超过 500KB
        //         }),
        //     })
        //     .refine((data) => data !== null && data !== undefined, {
        //         // 确保文件对象存在，即“必填”
        //         message: "Project image is required", // 文件未上传或不存在
        //     }),
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

        deliveryTime: z
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

        content: z.string(commonErrorMessage).min(1, "必填"),
        specification: z.string(commonErrorMessage).min(1, "必填"),

        deliveryWays: z.array(z.string()).min(1, "You must select at least one delivery way."),

        salesLimit: z.boolean(),
        salesLimitedQuantity: z.number().optional(),
    })
    .refine(
        (data) =>
            data.salesLimit === "false" || (data.salesLimit === "true" && data.salesLimitedQuantity !== undefined),
        {
            message: "Account limit count is required when sales limit is enabled",
            path: ["salesLimitedQuantity"], // 指定錯誤訊息應該被附加到哪個路徑
        },
    );
