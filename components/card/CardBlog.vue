<template>
    <div class="w-full md:max-w-[384px] rounded-lg shadow-card bg-white pb-2 cursor-pointer relative">
        <!-- 愛心 -->
        <div class="absolute top-2 right-2">
            <TagHeart :isFavorite="isFavorite" />
        </div>

        <!-- 主圖 -->
        <img :src="image" alt="product" class="rounded-lg w-full h-[148px] md:h-[202px] object-cover" />

        <div class="relative px-2">
            <!-- 團主名稱 -->
            <div
                class="rounded-b-lg flex items-center gap-x-1 absolute -top-[48px] left-0 w-full h-[36px] bg-[#1E253399] bg-opacity-60"
            >
                <UAvatar
                    :src="avatar"
                    alt="user"
                    size="xl"
                    class="ml-3 transform -translate-y-3 mr-2"
                    :ui="{
                        size: {
                            xl: 'w-[40px] h-[40px]',
                        },
                    }"
                />
                <span class="font-medium text-sm text-ellipsis text-white line-clamp-2">{{ name }}</span>
            </div>
            <!-- 文字 -->
            <p class="text-sm font-medium mt-3 mb-2 line-clamp-2">
                {{ text }}
            </p>

            <div class="flex gap-x-3 items-center">
                <p class="text-Neutral-500-Primary text-xs">2023/12/31</p>

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
                    <span class="text-xs text-Neutral-600-Dark-Primary">vicky 媽媽</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const { id } = defineProps({
    id: {
        type: Number,
    },
    name: {
        type: String,
        default: "",
    },
    text: {
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
    isFavorite: {
        type: Boolean,
        default: false,
    },
});
</script>

<style scoped></style>
