<template>
    <div class="p-3 mt-6 rounded-lg bg-white">
        <h2 class="font-medium text-black/[0.85] mb-5">地址 1</h2>

        <UForm :schema="addressSchema" :state="address" class="flex flex-col gap-y-3" @submit="onSubmit">
            <UFormGroup label="收件人" name="name" help="請填寫您個人真實姓名，才能確實收到包裹。" required>
                <UInput placeholder="王小美" v-model="address.name" />
            </UFormGroup>

            <UFormGroup label="收件人手機" name="phone" help="用於聯絡到貨通知使用。" required>
                <UInput placeholder="0902123456" v-model="address.phone" />
            </UFormGroup>

            <UFormGroup label="收件人電子信箱" name="email" help="用於聯絡到貨通知使用。" required>
                <UInput placeholder="idea2gether@gmail.com" v-model="address.email" />
            </UFormGroup>

            <UFormGroup label="收件人地址" name="address" help="如使用宅配到府得以直接帶入該地址。" required>
                <UInput placeholder="新北市樹林區五重路25巷3號3F" v-model="address.address" />
            </UFormGroup>

            <!-- 儲存更新 -->
            <div class="mt-4 flex gap-x-2">
                <button type="submit" class="bg-Primary-500-Primary text-white px-4 py-1 rounded-lg text-sm">
                    儲存更新
                </button>
                <button
                    type="button"
                    class="bg-white border border-Neutral-300 px-4 py-1 rounded-lg text-sm text-Primary-400-Hover"
                >
                    取消
                </button>
            </div>
        </UForm>
    </div>
</template>

<script setup>
import { addressSchema } from "~/validation";

const address = reactive({
    name: undefined,
    phone: undefined,
    email: undefined,
    address: undefined,
});

function onSubmit(event) {
    console.log(event.data);
}
</script>

<style lang="scss" scoped></style>
