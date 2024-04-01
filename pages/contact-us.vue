<template>
    <div
        class="relative overflow-hidden bg-cover bg-[url('assets/images/contact/mob-bg.png')] md:bg-[url('assets/images/contact/web-bg.png')] py-4 md:py-10 mb-[-40px] md:mb-[-120px]"
    >
        <div class="max-w-[323px] md:max-w-[1000px] mx-auto">
            <p class="text-white text-sm mb-8">
                <NuxtLink to="/" class="text-xs">Home</NuxtLink>&nbsp; / &nbsp;聯絡我們
            </p>

            <div class="flex flex-col md:flex-row gap-6 md:gap-x-14 md:items-center">
                <div class="relative z-10 backdrop-blur px-8 py-7 bg-white/30 rounded-lg max-w-[628px]">
                    <div class="mb-8">
                        <p class="font-medium text-white text-xs">聯絡我們</p>
                        <p class="text-2xl font-bold text-white">Contact us</p>
                        <p class="text-xs text-white mt-1 leading-[1.125rem]">
                            感謝您對idea2gether的支持，如果您有任何操作問題、合作提案、問題反饋或者對於我們網站使用上的建議，歡迎您留言給我們！我們將於上班時間(週一10:00~週五18:00)，請對應窗口優先與您聯繫，感謝您的寶貴意見與反饋，都是我們成長與進步的動力！
                        </p>
                    </div>

                    <UForm class="flex flex-col gap-y-3 font-base" @submit="onSubmit">
                        <UFormGroup label="您的姓名" name="name" :ui="{ label: { base: 'text-white font-normal' } }">
                            <UInput placeholder="ex:王小美" v-model="contact.name" size="sm" />
                        </UFormGroup>

                        <UFormGroup label="公司名稱" name="company" :ui="{ label: { base: 'text-white font-normal' } }">
                            <UInput placeholder="ex: 愛上大數據股份有限公司" v-model="contact.company" size="sm" />
                        </UFormGroup>

                        <UFormGroup label="聯絡信箱" name="email" :ui="{ label: { base: 'text-white font-normal' } }">
                            <UInput placeholder="ex: idea2gether @gmail.com" v-model="contact.email" size="sm" />
                        </UFormGroup>

                        <UFormGroup label="聯絡電話" name="phone" :ui="{ label: { base: 'text-white font-normal' } }">
                            <UInput placeholder="ex: 0909090234" v-model="contact.phone" size="sm" />
                        </UFormGroup>

                        <UFormGroup
                            label="問題與訊息簡述"
                            name="description"
                            :ui="{ label: { base: 'text-white font-normal' } }"
                        >
                            <UtilTextarea
                                :resize="true"
                                placeholder="請您簡述想聯絡idea2gether的訊息..."
                                :max="300"
                                v-model="contact.description"
                            />
                        </UFormGroup>

                        <button
                            type="submit"
                            class="bg-Primary-500-Primary text-white px-4 py-2 rounded-lg text-sm mt-7"
                        >
                            確認送出
                        </button>
                    </UForm>
                </div>

                <div class="relative z-10 backdrop-blur py-4 px-8 bg-[#513FAD]/[.7] rounded-lg text-white md:flex-1">
                    <p class="font-medium">INFO</p>
                    <UDivider class="my-4" />
                    <div class="flex flex-col gap-y-4">
                        <div class="flex gap-x-4">
                            <img src="~assets/images/contact/mail.svg" alt="mail" />
                            <p class="text-sm">idea2gether-service@gmail.com</p>
                        </div>
                        <div class="flex gap-x-4">
                            <img src="~assets/images/contact/company.svg" alt="company" />
                            <p class="text-sm">愛上大數據股份有限公司</p>
                        </div>
                        <div class="flex gap-x-4">
                            <img src="~assets/images/contact/clock.svg" alt="clock" />
                            <p class="text-sm">AM10:00 - PM18:00</p>
                        </div>
                    </div>
                    <UDivider class="my-4" />
                    <div class="flex gap-x-6">
                        <NuxtLink to="" target="_blank">
                            <img src="~assets/images/contact/line.svg" alt="line" />
                        </NuxtLink>
                        <NuxtLink to="" target="_blank"
                            ><img src="~assets/images/contact/YouTube.svg" alt="YouTube"
                        /></NuxtLink>
                        <NuxtLink to="" target="_blank">
                            <img src="~assets/images/contact/Instagram.svg" alt="Instagram"
                        /></NuxtLink>
                        <NuxtLink to="" target="_blank">
                            <img src="~assets/images/contact/fb.svg" alt="fb" />
                        </NuxtLink>
                    </div>
                </div>
            </div>
        </div>

        <img
            src="~assets/images/contact/mob-top-right.png"
            alt="circle"
            class="absolute top-[-50px] right-0 md:hidden"
        />
        <img
            src="~assets/images/contact/mob-bottom-left.png"
            alt="circle"
            class="absolute bottom-[150px] left-0 md:hidden"
        />
        <img
            src="~assets/images/contact/web-top-right.png"
            alt="circle"
            class="absolute hidden top-0 right-0 md:block"
        />
        <img
            src="~assets/images/contact/web-bottom-left.png"
            alt="circle"
            class="absolute hidden bottom-0 left-0 md:block"
        />
    </div>
</template>
<script setup>
const contact = ref({
    name: "",
    company: "",
    email: "",
    phone: "",
    description: "",
});

function onSubmit() {
    console.log("onSubmit");
}
</script>

<style scoped lang="scss">
:deep(.number) {
    color: #fff;
}
</style>
