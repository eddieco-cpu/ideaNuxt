<template>
    <div class="flex flex-col md:flex-row gap-x-5 group cursor-pointer" @click="goToArticle">
        <div class="w-full h-[170px] md:w-[348px] md:h-[184px]">
            <img
                :src="image"
                alt="image"
                class="w-full h-full object-cover rounded transition-transform duration-300 group-hover:scale-[1.03]"
            />
        </div>

        <div class="flex flex-col gap-y-3 flex-1 py-2">
            <div class="flex gap-x-3 items-center">
                <div class="text-Neutral-600-Dark-Primary text-xs flex items-center">
                    <img src="~assets/images/icon/calendar-icon.svg" alt="calendar-icon" />
                    <span class="ml-1">{{ date }}</span>
                </div>

                <div class="flex gap-x-2 items-center">
                    <UAvatar
                        :src="avatar"
                        alt="user"
                        size="xl"
                        :ui="{
                            size: {
                                xl: 'w-[18px] h-[18px]',
                            },
                        }"
                    />
                    <span class="text-xs text-Neutral-600-Dark-Primary">{{ name }}</span>
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
                {{ title }}
            </h1>

            <p class="text-xs text-Neutral-600-Dark-Primary">
                {{ text }}
            </p>

            <div class="flex flex-wrap gap-2">
                <BlogTag v-for="item in tags" :text="item" />
            </div>
        </div>
    </div>
</template>

<script setup>
import { useToast } from "vue-toastification";

const { id, isFavorite } = defineProps({
    id: {
        type: Number,
    },
    index: {
        type: Number,
    },
    isFavorite: {
        type: Boolean,
        default: false,
    },
    title: {
        type: String,
        default: "",
    },
    text: {
        type: String,
        default: "",
    },
    name: {
        type: String,
        default: "",
    },
    image: {
        type: String,
        default: "",
    },
    avatar: {
        type: String,
        default: "",
    },
    tags: {
        type: Array,
        default: () => [],
    },
    date: {
        type: String,
        default: "",
    },
});

const toast = useToast();
const addFavorite = ref(isFavorite);

function isAddFavorite(e, status) {
    e.stopPropagation();

    addFavorite.value = status;

    if (status) {
        toast.success("已成功加入收藏");
    } else {
        toast.error("已取消收藏");
    }
}

function goToArticle() {
    navigateTo(`/blog/article/${id}`);
}
</script>
