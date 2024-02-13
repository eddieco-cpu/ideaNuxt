<template>
    <div>
        <div>
            <h1 class="text-xl mb-3">修改密碼</h1>

            <div class="p-3 mt-6 rounded-lg bg-white">
                <div class="flex flex-col gap-y-6 md:max-w-[275px]">
                    <UFormGroup
                        label="目前密碼"
                        name="password"
                        :ui="{
                            help: 'text-xs mt-0 text-black/[0.45]',
                            label: {
                                required: `before:content-['*'] before:mx-0.5 before:text-red-500 after:content-['']`,
                            },
                        }"
                    >
                        <UInput
                            type="password"
                            color="white"
                            variant="none"
                            placeholder="ex: A2345678"
                            class="border border-Neutral-400-Hover rounded-md"
                            v-model="editPassword.password"
                        >
                            <template #leading>
                                <img src="~assets/images/icon/lock-icon.svg" alt="lock-icon" />
                            </template>
                        </UInput>
                    </UFormGroup>

                    <UFormGroup
                        label="新密碼"
                        name="newPassword"
                        :ui="{
                            help: 'text-xs mt-0 text-black/[0.45]',
                            label: {
                                required: `before:content-['*'] before:mx-0.5 before:text-red-500 after:content-['']`,
                            },
                        }"
                        required
                    >
                        <template #hint>
                            <span class="text-xs text-black/[0.45]">（長度至少為8個字元且含大寫字母）</span>
                        </template>
                        <UInput
                            type="password"
                            color="white"
                            variant="none"
                            placeholder="ex: A2345678"
                            class="border border-Neutral-400-Hover rounded-md"
                            v-model="editPassword.newPassword"
                        >
                            <template #leading>
                                <img src="~assets/images/icon/lock-icon.svg" alt="lock-icon" />
                            </template>
                        </UInput>
                    </UFormGroup>

                    <UFormGroup
                        label="請再輸入新密碼"
                        name="confirmPassword"
                        :ui="{
                            help: 'text-xs mt-0 text-black/[0.45]',
                            label: {
                                required: `before:content-['*'] before:mx-0.5 before:text-red-500 after:content-['']`,
                            },
                        }"
                        required
                    >
                        <UInput
                            type="password"
                            color="white"
                            variant="none"
                            placeholder="ex: A2345678"
                            class="border border-Neutral-400-Hover rounded-md"
                            v-model="editPassword.confirmPassword"
                        >
                            <template #leading>
                                <img src="~assets/images/icon/lock-icon.svg" alt="lock-icon" />
                            </template>
                        </UInput>
                    </UFormGroup>

                    <!-- 儲存更新 -->
                    <div class="mt-4 flex gap-x-2">
                        <button class="bg-Primary-500-Primary text-white px-4 py-1 rounded-lg text-sm">儲存更新</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const editPassword = ref({
    password: "",
    newPassword: "",
    confirmPassword: "",
});
</script>

<style scoped></style>
