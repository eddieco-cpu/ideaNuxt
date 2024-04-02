<template>
    <div class="flex flex-col md:flex-row gap-x-5 group cursor-pointer">
        <div class="w-full h-[170px] md:w-[348px] md:h-[184px]">
            <img
                :src="helperPicture()"
                alt="image"
                class="w-full h-full object-cover rounded transition-transform duration-300 group-hover:scale-[1.03]"
            />
        </div>

        <div class="flex flex-col gap-y-3 flex-1 py-2">
            <div class="flex gap-x-3 items-center">
                <div class="text-Neutral-600-Dark-Primary text-xs flex items-center">
                    <img src="~assets/images/icon/calendar-icon.svg" alt="calendar-icon" />
                    <span class="ml-1">2023/12/31</span>
                </div>

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
                    <span class="text-xs text-Neutral-600-Dark-Primary">vicky 媽媽</span>
                </div>

                <div class="ml-auto cursor-pointer" @click="isAddFavorite($event, !addFavorite)">
                    <img
                        src="~assets/images/blog/heart-icon.svg"
                        alt="favorite"
                        v-show="!addFavorite"
                        class="w-[18px]"
                    />
                    <img
                        src="~assets/images/blog/heart-active-icon.svg"
                        alt="favorite"
                        v-show="addFavorite"
                        class="w-[18px]"
                    />
                </div>
            </div>

            <h1 class="text-Neutral-800 font-medium group-hover:underline">
                揭開團購的神秘面紗，享受超值折扣，共享樂趣，省錢購物新體驗！
            </h1>

            <p class="text-xs text-Neutral-600-Dark-Primary">
                在當今快速變化的市場中，探索省錢的方式同時享受物超所值的產品成為人們的共同追求。讓我們以一個產品為例，來看看團購如何為消費者帶來實惠和樂趣。
            </p>

            <div class="flex flex-wrap gap-2">
                <BlogTag v-for="item in 3" />
            </div>
        </div>
    </div>
</template>

<script setup>
import { useToast } from "vue-toastification";

const toast = useToast();
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
