<template>
    <div class="w-full rounded-lg shadow-card bg-white cursor-pointer relative group xl:max-w-96">
        <!-- 標籤 -->
        <div class="flex flex-col items-start gap-y-2 absolute top-2 left-2 z-[2]">
            <Tag v-for="(tag, index) in tags" :key="index" :tag="tag" />
        </div>

        <div class="flex gap-x-3" :class="type === 'ttb' && 'max-md:flex-col '">
            <!-- 主圖 -->
            <div
                class="block relative rounded overflow-hidden aspect-[1/1] w-[168px]"
                :class="type === 'ttb' && 'max-md:w-full'"
            >
                <!-- 愛心 -->
                <div class="absolute top-2 right-2">
                    <TagHeart />
                </div>
                <img :src="helperPicture()" alt="product" class="block w-full h-full object-cover" />
            </div>
            <!-- 文字 -->
            <div
                class="relative py-2 pr-2 flex flex-col items-start justify-evenly gap-y-3 flex-1"
                :class="type === 'ttb' && 'max-md:pt-0 max-md:pb-3 max-md:px-4'"
            >
                <!-- 團主名稱 -->
                <div
                    class="rounded-b flex items-center gap-x-1"
                    :class="
                        type === 'ttb' &&
                        'max-md:ring-1 max-md:w-[calc(100%+32px)] max-md:ml-[-16px] max-md:h-[48px] max-md:px-3 max-md:bg-[rgba(0,0,0,0.4)] max-md:mt-[-48px]'
                    "
                >
                    <div class="flex items-center gap-x-1 h-full w-full">
                        <UAvatar
                            src="https://avatars.githubusercontent.com/u/739984?v=4"
                            alt="user"
                            size="xl"
                            :class="type === 'ttb' ? 'transform -translate-y-[45%] ' : ''"
                            :ui="{
                                size: {
                                    xl: `w-[36px] h-[36px] ${type === 'ttb' && 'max-md:w-[60px] max-md:h-[60px]'}`,
                                },
                            }"
                        />
                        <span
                            class="text-xs font-medium text-Neutral-700 line-clamp-2"
                            :class="type === 'ttb' && 'max-md:text-white max-md:text-base max-md:line-clamp-1'"
                            >小雯媽咪愛漂亮小雯媽咪愛漂亮小雯媽咪愛漂亮小雯媽咪愛漂亮小雯媽咪愛漂亮</span
                        >
                    </div>
                </div>

                <!-- 敘述 -->
                <div>
                    <p class="line-clamp-2 text-Neutral-900 text-sm font-medium group-hover:underline">
                        小雯媽咪 x 最舒適的被子推薦❤️十月被、冬月被被子推薦❤️十月被、冬月被冬月
                    </p>
                </div>
                <!-- 價格 -->
                <div>
                    <p class="text-Status-Color-Danger-500-Primary font-medium font-roboto">$ 1,200 - $ 3,280</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    type: {
        type: String,
        default: "ltr",
    },
});

const tags = ref([
    { name: "促銷", color: "primary", type: "text" },
    { name: "免運", color: "danger", type: "text" },
    { name: "19日", color: "success", type: "time" },
]);
</script>

<style scoped></style>
