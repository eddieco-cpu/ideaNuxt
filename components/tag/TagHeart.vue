<template>
    <!-- 愛心模式 -->
    <div v-if="!isEditMode" class="cursor-pointer">
        <!-- 收藏卡片 -->
        <div v-if="!isAddKol" @click="isAddFavorite($event, !addFavorite)">
            <img src="~assets/images/icon/heart-icon.svg" alt="favorite" v-show="!addFavorite" class="w-6" />
            <img src="~assets/images/icon/heart-active-icon.svg" alt="favorite" v-show="addFavorite" class="w-6" />
        </div>

        <!-- 收藏團購主 -->
        <div
            class="bg-Primary-100 flex items-center gap-x-1 rounded-lg py-2 px-4"
            v-if="isAddKol"
            @click="isAddKolFavorite($event, !addKolFavorite)"
        >
            <img src="~assets/images/icon/heart-icon-purple.svg" alt="heart" v-show="!addKolFavorite" />
            <img src="~assets/images/icon/heart-icon-active-purple.svg" alt="heart" v-show="addKolFavorite" />

            <h3 class="text-sm" :class="[addKolFavorite ? 'text-Primary-600-Dark-Primary' : 'text-Primary-400-Hover']">
                收藏團購主
            </h3>
        </div>
    </div>

    <!-- 編輯模式 -->
    <div
        v-if="isEditMode"
        class="cursor-pointer size-[30px] bg-[#392B90]/[0.5] rounded flex items-center justify-center"
    >
        <img src="~assets/images/icon/edit-gray-icon.svg" alt="edit" @click="editProposal" />
    </div>
</template>

<script setup>
import { useToast } from "vue-toastification";

const toast = useToast();

const { isFavorite, isEditMode, isAddKol } = defineProps({
    isFavorite: {
        type: Boolean,
        default: false,
    },
    isEditMode: {
        type: Boolean,
        default: false,
    },
    isAddKol: {
        type: Boolean,
        default: false,
    },
});

const addFavorite = ref(isFavorite);
const addKolFavorite = ref(isFavorite);

function isAddFavorite(e, status) {
    e.stopPropagation();

    addFavorite.value = status;

    if (status) {
        toast.success("已成功加入收藏");
    } else {
        toast.error("已取消收藏");
    }
}

function isAddKolFavorite(e, status) {
    e.stopPropagation();

    addKolFavorite.value = status;

    if (status) {
        toast.success("已成功收藏團購主");
    } else {
        toast.error("已取消收藏團購主");
    }
}

function editProposal(e) {
    e.stopPropagation();
}
</script>

<style scoped></style>
