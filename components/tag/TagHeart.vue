<template>
    <!-- 愛心模式 -->
    <div v-if="!isEditMode">
        <img
            src="~assets/images/icon/heart-icon.svg"
            alt="favorite"
            v-show="!addFavorite"
            @click="isAddFavorite($event, true)"
        />
        <img
            src="~assets/images/icon/heart-active-icon.svg"
            alt="favorite"
            v-show="addFavorite"
            @click="isAddFavorite($event, false)"
        />
    </div>

    <!-- 編輯模式 -->
    <div v-if="isEditMode">
        <img src="~assets/images/icon/edit-gray-icon.svg" alt="edit" @click="editProposal" />
    </div>
</template>

<script setup>
import { useToast } from "vue-toastification";

const toast = useToast();

const { isEditMode } = defineProps({
    isEditMode: {
        type: Boolean,
        default: false,
    },
});

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

function editProposal(e) {
    e.stopPropagation();
}
</script>

<style scoped></style>
