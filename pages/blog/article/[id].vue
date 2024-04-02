<template>
    <div class="py-4 px-[26px]">
        <div class="w-full md:max-w-[1200px] mx-auto">
            <UBreadcrumb
                divider="/"
                :links="links"
                :ui="{
                    base: 'font-normal',
                    active: 'text-black font-normal',
                    inactive: 'text-Neutral-600-Dark-Primary text-sm',
                }"
                class="mb-5"
            />

            <div class="flex flex-col md:flex-row md:justify-between md:flex-wrap gap-y-8">
                <div class="flex flex-col gap-y-4 md:w-[67%]">
                    <!-- Title -->
                    <h1 class="text-Neutral-900 text-[28px] font-medium">
                        揭開團購的神秘面紗，享受超值折扣，共享樂趣，省錢購物新體驗！
                    </h1>

                    <div class="flex items-center gap-x-2 pb-4 border-b border-b-Neutral-300">
                        <div class="text-Neutral-600-Dark-Primary text-xs flex items-center">
                            <img src="~assets/images/icon/calendar-icon.svg" alt="calendar-icon" />
                            <span class="ml-1">2023/12/31</span>
                        </div>

                        <BlogTag v-for="item in 2" />

                        <div class="ml-auto cursor-pointer" @click="isAddFavorite($event, !addFavorite)">
                            <img
                                src="~assets/images/blog/heart-icon.svg"
                                alt="favorite"
                                v-show="!addFavorite"
                                class="w-[24px]"
                            />
                            <img
                                src="~assets/images/blog/heart-active-icon.svg"
                                alt="favorite"
                                v-show="addFavorite"
                                class="w-[24px]"
                            />
                        </div>
                    </div>

                    <div class="bg-white p-2 flex gap-x-2 rounded-lg">
                        <span class="text-sm text-Neutral-600-Dark-Primary">文章作者：</span>

                        <div class="flex gap-x-2 items-center">
                            <UAvatar
                                :src="helperPicture()"
                                alt="user"
                                size="xl"
                                :ui="{
                                    size: {
                                        xl: 'w-[18px] h-[18px]',
                                    },
                                }"
                            />
                            <span class="text-sm font-medium">vicky 媽媽</span>
                        </div>

                        <img src="~assets/images/blog/right-circle-light.svg" alt="arrow" class="ml-auto" />
                    </div>

                    <div class="mt-4 mb-6 mx-[-26px] md:mx-0">
                        <img :src="helperPicture()" alt="" class="aspect-[1.9/1] object-cover" />
                    </div>

                    <div class="bg-white p-6 rounded-lg flex flex-col gap-y-4 mx-[-26px] md:mx-0">
                        <h1 class="text-[28px] font-medium">H1 音樂之聲，品味之選</h1>
                        <h2 class="text-[24px] font-medium">H2 音樂之聲，品味之選</h2>
                        <h3 class="text-[20px] font-medium">H3 音樂之聲，品味之選</h3>
                        <h4 class="text-[16px] font-medium">H4 音樂之聲，品味之選</h4>
                        <h5 class="text-[12px] text-[#696969]">
                            H5 我們的音響系列，融合了最先進的音響技術，以確保每一個音符都清晰動人。
                        </h5>

                        <div class="border-l-2 border-l-Primary-500-Primary px-4 py-3 font-medium">文章重點樣式</div>

                        <div class="max-w-[488px]">
                            <BlogFundraise />
                        </div>

                        <div class="max-w-[488px]">
                            <BlogGroupBuying />
                        </div>

                        <div class="w-full">
                            <img :src="helperPicture()" alt="image" class="aspect-[1/1.73] object-cover" />
                        </div>
                    </div>

                    <UDivider class="mt-2 mb-4" />

                    <div class="md:w-[calc(100vw-32px-75%)] md:absolute md:right-[calc(100vw-32px-90%)]">
                        <div class="flex flex-col gap-y-4">
                            <h1 class="text-[#010204] text-xl font-medium">推薦給您</h1>
                            <BlogFundraise />

                            <BlogGroupBuying v-for="item in 3" />
                        </div>

                        <div class="mt-4 md:mt-9">
                            <h1 class="text-[#010204] text-xl font-medium mb-4">猜你想看…</h1>
                            <div class="flex flex-wrap gap-4">
                                <BlogTag v-for="item in 10" />
                            </div>
                        </div>
                    </div>

                    <div class="flex flex-col gap-y-4 mt-4">
                        <h1 class="text-[#010204] text-xl font-medium flex items-center justify-between">
                            推薦其他文章
                            <NuxtLink
                                to="/blog/list/technology-ai"
                                class="flex items-center gap-x-1 text-sm text-Primary-500-Primary"
                                >更多文章
                                <img src="~assets/images/blog/right-circle-light.svg" alt="arrow" width="16" />
                            </NuxtLink>
                        </h1>
                        <BlogArticle v-for="item in 3" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useToast } from "vue-toastification";

const toast = useToast();

const links = [{ label: "Home", to: "/" }, { label: "好物分享", to: "/blog" }, { label: "生活常識" }];

const addFavorite = ref(false);

function isAddFavorite(e, status) {
    e.stopPropagation();

    addFavorite.value = status;

    if (status) {
        toast.success("已成功加入收藏");
    } else {
        toast.error("已取消收藏");
    }
}
</script>
