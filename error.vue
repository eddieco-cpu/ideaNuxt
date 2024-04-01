<template>
    <NuxtLayout name="default">
        <div class="md:h-[calc(100vh-74px-120px-44px-295px)]">
            <div
                class="relative overflow-hidden max-w-[323px] mt-4 mx-auto rounded-2xl py-12 px-6 bg-white md:max-w-[1088px] md:flex md:justify-center md:items-center md:gap-x-5 md:mt-11 md:py-8"
            >
                <div>
                    <p class="text-Secondary-500-Primary text-[28px] font-medium">
                        Ooops... <br />
                        此頁面似乎消失在宇宙中！
                    </p>
                    <p class="text-sm font-medium text-Neutral-700 mt-6 mb-5">
                        哎呀！看來我們的網站在宇宙中迷路了。 <br />請檢查您的網址座標是否正確，或回到首頁，謝謝！
                    </p>
                </div>

                <img src="~assets/images/status/404.png" alt="error" />

                <img
                    src="~assets/images/error/mob-top-right.png"
                    alt="circle"
                    class="absolute top-[-150px] right-[-165px] md:hidden"
                />
                <img
                    src="~assets/images/error/mob-bottom-left.png"
                    alt="circle"
                    class="absolute bottom-[-100px] left-[-100px] md:hidden"
                />

                <img
                    src="~assets/images/error/web-top-right.png"
                    alt="circle"
                    class="absolute hidden top-[-170px] right-[-155px] md:block"
                />
                <img
                    src="~assets/images/error/web-bottom-left.png"
                    alt="circle"
                    class="absolute hidden bottom-[-200px] left-[-250px] md:block"
                />
            </div>
        </div>
    </NuxtLayout>
</template>

<script setup>
const props = defineProps({
    error: { type: Object, required: true },
});

const handleError = () => clearError({ redirect: "/" });
</script>

<style scoped lang="scss">
.wrapper {
    height: calc(100vh - 74px - 120px - 44px - 295px);
}
</style>
