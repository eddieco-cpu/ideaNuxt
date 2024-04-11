<template>
    <CardContainer title="收件人資訊">
        <template #body>
            <ul class="flex flex-col gap-y-3">
                <li class="flex items-center gap-x-4">
                    <h5 class="text-Neutral-600-Dark-Primary text-sm min-w-[70px]">收件人姓名</h5>
                    <p class="text-Neutral-900 text-sm">{{ receive_name }}</p>
                </li>

                <li class="flex items-center gap-x-4">
                    <h5 class="text-Neutral-600-Dark-Primary text-sm min-w-[70px]">聯絡地址</h5>
                    <p class="text-Neutral-900 text-sm">{{ receive_full_address }}</p>
                </li>

                <li class="flex items-center gap-x-4">
                    <h5 class="text-Neutral-600-Dark-Primary text-sm min-w-[70px]">聯絡電話</h5>
                    <p class="text-Neutral-900 text-sm">{{ receive_phone }}</p>
                </li>

                <li class="flex items-center gap-x-4">
                    <h5 class="text-Neutral-600-Dark-Primary text-sm min-w-[70px]">電子郵件</h5>
                    <p class="text-Neutral-900 text-sm">{{ receive_email }}</p>
                </li>

                <!-- <li class="flex items-center gap-x-4">
                    <h5 class="text-Neutral-600-Dark-Primary text-sm min-w-[70px]">配送方式</h5>
                    <p class="text-Neutral-900 text-sm">宅配到府</p>
                </li>

                <li class="bg-Neutral-bg rounded p-2 flex gap-x-2">
                    <img src="~assets/images/order/black-cat.png" alt="delivery" class="size-9 rounded" />

                    <div class="flex-1">
                        <p class="text-Neutral-Primary text-sm font-medium flex items-center">
                            黑貓宅急便
                            <span class="underline ml-2">804148783468 </span>
                            <img
                                src="~assets/images/icon/copy-icon.svg"
                                alt="copy"
                                class="cursor-pointer ml-1"
                                @click="copyText"
                            />
                        </p>
                        <p class="text-xs text-neutral-third-hint">2023-08-16 11:32</p>
                    </div>
                </li> -->
            </ul>
        </template>
    </CardContainer>
</template>

<script setup>
import { useToast } from "vue-toastification";

const toast = useToast();

const { receive_name, receive_full_address, receive_phone, receive_email } = defineProps({
    receive_name: {
        type: String,
    },
    receive_full_address: {
        type: String,
    },
    receive_phone: {
        type: String,
    },
    receive_email: {
        type: String,
    }
});

const deliveryNumber = ref("804148783468");

function copyText() {
    if (navigator && navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(deliveryNumber.value);
    } else {
        const el = document.createElement("textarea");
        el.value = deliveryNumber.value;
        el.style.position = "absolute";
        el.style.opacity = "0";
        document.body.appendChild(el);
        el.select();
        document.execCommand("copy");
        document.body.removeChild(el);
    }

    toast.success("已複製");
}
</script>
