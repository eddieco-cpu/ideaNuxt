<template>
    <div>
        <div>
            <h1 class="text-xl mb-3">修改密碼</h1>

            <div class="p-6 mt-6 rounded-lg bg-white">
                <UForm
                    :schema="setPasswordSchema"
                    :state="editPassword"
                    class="flex flex-col gap-y-6 md:max-w-[275px]"
                    @submit="onSubmit"
                >
                    <UFormGroup label="目前密碼" name="password" required>
                        <UInput type="password" placeholder="ex: A2345678" v-model="editPassword.password" autocomplete>
                            <template #leading>
                                <img src="~assets/images/icon/lock-icon.svg" alt="lock-icon" />
                            </template>
                        </UInput>
                    </UFormGroup>

                    <UFormGroup label="新密碼" name="newPassword" required>
                        <template #hint>
                            <span class="text-xs text-black/[0.45]">（長度至少為8個字元且含大寫字母）</span>
                        </template>
                        <UInput
                            type="password"
                            placeholder="ex: A2345678"
                            v-model="editPassword.newPassword"
                            autocomplete
                        >
                            <template #leading>
                                <img src="~assets/images/icon/lock-icon.svg" alt="lock-icon" />
                            </template>
                        </UInput>
                    </UFormGroup>

                    <UFormGroup label="請再輸入新密碼" name="confirmPassword" required>
                        <UInput
                            type="password"
                            placeholder="ex: A2345678"
                            v-model="editPassword.confirmPassword"
                            autocomplete
                        >
                            <template #leading>
                                <img src="~assets/images/icon/lock-icon.svg" alt="lock-icon" />
                            </template>
                        </UInput>
                    </UFormGroup>

                    <!-- 儲存更新 -->
                    <div class="mt-4 flex gap-x-2">
                        <button type="submit" class="bg-Primary-500-Primary text-white px-4 py-1 rounded-lg text-sm">
                            儲存更新
                        </button>
                    </div>
                </UForm>
            </div>
        </div>
    </div>
</template>

<script setup>
import { setPasswordSchema } from "~/validation";

const editPassword = reactive({
    password: undefined,
    newPassword: undefined,
    confirmPassword: undefined,
});

async function onSubmit(event) {
    console.log("event.data", event.data);
    const { password, newPassword, confirmPassword } = event.data;
}
</script>

<style scoped></style>
