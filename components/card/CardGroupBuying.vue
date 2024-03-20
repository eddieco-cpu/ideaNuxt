<template>
    <div class="w-full rounded-lg shadow-card bg-white cursor-pointer relative group" @click="goProductDetailPage">
        <div class="group-hover:shadow-[1px_1px_20px_0px_rgba(0,0,0,0.06)] transition-shadow duration-300">
            <!-- 標籤 -->
            <div class="flex flex-col items-start gap-y-2 absolute top-2 left-2 z-[2]" v-if="!isExpired">
                <Tag v-for="(tag, index) in tags" :key="index" :tag="tag" />
            </div>

            <div class="flex gap-x-3" :class="[`${isMainPictureShowLeft ? 'max-md:flex-col' : 'md:flex-col'}`]">
                <!-- 主圖 -->
                <div class="relative overflow-hidden rounded">
                    <img
                        :src="image"
                        alt="product"
                        class="w-[146px] h-[146px] object-cover transition-transform duration-300 group-hover:scale-105"
                        :class="[
                            `${isMainPictureShowLeft ? 'max-md:flex-col' : 'md:flex-col'}`,
                            `${isMainPictureShowLeft ? 'max-md:w-full' : 'md:w-full'}`,
                            `${isMainPictureShowLeft ? 'max-md:h-[234px]' : 'md:h-[234px]'}`,
                        ]"
                    />
                    <!-- 愛心 -->
                    <div class="absolute top-2 right-2">
                        <TagHeart :isFavorite="isFavorite" :id="id" />
                    </div>
                </div>

                <!-- 文字 -->
                <div
                    class="relative py-2 pr-2 flex flex-col items-start justify-evenly gap-y-3 flex-1"
                    :class="[
                        `${isMainPictureShowLeft ? 'max-md:px-3' : 'md:px-3'}`,
                        `${isMainPictureShowLeft ? 'max-md:pt-3' : 'md:pt-3'}`,
                        `${isMainPictureShowLeft ? 'max-md:gap-y-2' : 'md:gap-y-2'}`,
                    ]"
                >
                    <!-- 團主名稱 -->
                    <div
                        class="rounded-b-lg flex items-center gap-x-1"
                        :class="[
                            `${isMainPictureShowLeft ? 'max-md:absolute' : 'md:absolute'}`,
                            `${isMainPictureShowLeft ? 'max-md:-top-[48px]' : 'md:-top-[48px]'}`,
                            `${isMainPictureShowLeft ? 'max-md:left-0' : 'md:left-0'}`,
                            `${isMainPictureShowLeft ? 'max-md:w-full' : 'md:w-full'}`,
                            `${isMainPictureShowLeft ? 'max-md:h-[48px]' : 'md:h-[48px]'}`,
                            `${isMainPictureShowLeft ? 'max-md:bg-[#1E253399]' : 'md:bg-[#1E253399]'}`,
                            `${isMainPictureShowLeft ? 'max-md:bg-opacity-60' : 'md:bg-opacity-60'}`,
                        ]"
                    >
                        <div class="flex items-center gap-x-1 h-full w-full" v-if="!isExpired">
                            <UAvatar
                                :src="avatar"
                                alt="user"
                                size="xl"
                                :class="[
                                    `${isMainPictureShowLeft ? 'max-md:ml-3' : 'md:ml-3'}`,
                                    `${isMainPictureShowLeft ? 'max-md:transform' : 'md:transform'}`,
                                    `${isMainPictureShowLeft ? 'max-md:-translate-y-3' : 'md:-translate-y-3'}`,
                                ]"
                                :ui="{
                                    size: {
                                        xl: `size-[36px] 
                                    ${isMainPictureShowLeft ? 'max-md:size-[60px]' : 'md:size-[60px]'}`,
                                    },
                                }"
                            />
                            <span
                                class="text-xs font-medium text-Neutral-700 line-clamp-2"
                                :class="[
                                    `${isMainPictureShowLeft ? 'max-md:text-base' : 'md:text-base'}`,
                                    `${isMainPictureShowLeft ? 'max-md:text-white' : 'md:text-white'}`,
                                ]"
                                >{{ name }}</span
                            >
                        </div>

                        <div
                            class="text-Neutral-700 text-xs font-medium"
                            :class="[
                                `${isMainPictureShowLeft ? 'max-md:text-white' : 'md:text-white'}`,
                                `${isMainPictureShowLeft ? 'max-md:inline-block' : 'md:inline-block'}`,
                                `${isMainPictureShowLeft ? 'max-md:mx-auto' : 'md:mx-auto'}`,
                                `${isMainPictureShowLeft ? 'max-md:text-base' : 'md:text-base'}`,
                            ]"
                            v-else
                        >
                            已結束
                        </div>
                    </div>

                    <!-- 敘述 -->
                    <div>
                        <p class="line-clamp-2 text-Neutral-900 text-sm font-medium group-hover:underline">
                            {{ text }}
                        </p>
                    </div>
                    <!-- 價格 -->
                    <div v-if="!isExpired">
                        <p class="text-Status-Color-Danger-500-Primary font-medium font-roboto">
                            $ {{ helperMoneyComma(price[0]) }} - $ {{ helperMoneyComma(price[1]) }}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const { isExpired, id } = defineProps({
    isExpired: {
        type: Boolean,
        default: false,
    },
    isMainPictureShowLeft: {
        type: Boolean,
        default: false,
    },
    isFavorite: {
        type: Boolean,
        default: true,
    },
    id: {
        type: Number,
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
    text: {
        type: String,
        default: "",
    },
    price: {
        type: Array,
        default: () => [0, 0],
    },
    tags: {
        type: Array,
        default: () => [],
    },
});

function goProductDetailPage() {
    if (isExpired) return;

    navigateTo(`/products/buying/${id}`);
}
</script>

<style scoped></style>
