<template>
    <div class="w-full rounded-lg shadow-card bg-white cursor-pointer relative group rounded-lg overflow-hidden">
        <!-- 愛心 -->
        <div class="absolute top-2 right-2">
            <TagHeart />
        </div>

        <div class="flex gap-x-3 flex-col">
            <!-- 主圖 -->
            <img
                :src="helperPicture()"
                alt="product"
                class="rounded w-full h-[234px] max-md:block max-md:h-auto max-md:aspect-[322/148] object-cover"
            />
            <!-- 文字 -->
            <div class="relative py-2 flex flex-col items-start justify-evenly flex-1 px-3 pt-3 gap-y-2">
                <!-- 團主名稱 -->
                <div
                    class="rounded-b-lg flex items-center gap-x-1 absolute -top-[48px] left-0 w-full h-[48px] bg-[#1E253399] bg-opacity-60"
                >
                    <div class="flex items-center gap-x-1 h-full w-full">
                        <UAvatar
                            src="https://avatars.githubusercontent.com/u/739984?v=4"
                            alt="user"
                            size="xl"
                            class="ml-3 transform -translate-y-3"
                            :ui="{
                                size: {
                                    xl: 'w-[60px] h-[60px]',
                                },
                            }"
                        />
                        <span class="text-base font-medium line-clamp-1 text-white"
                            >小雯媽咪愛漂亮小雯媽咪愛漂亮小雯媽咪愛漂亮小雯媽咪愛漂亮小雯媽咪愛漂亮</span
                        >
                    </div>
                </div>

                <!-- 敘述 -->
                <div>
                    <p class="line-clamp-2 text-Neutral-900 text-base font-medium mb-2 group-hover:underline">
                        小雯媽咪 x 最舒適的被子推薦❤️十月被、冬月被被子推薦❤️十月被、冬月被冬月
                    </p>
                </div>
                <!-- -->
                <div class="mb-1">
                    <p class="text-xs font-normal text-Neutral-500-Primary">2023/12/31</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup></script>

<style scoped></style>
