<template>
    <div>
        <img
            src="~assets/images/icon/heart-icon.svg"
            alt="favorite"
            v-show="!addFavorite"
            @click="isAddFavorite(true)"
        />
        <img
            src="~assets/images/icon/heart-active-icon.svg"
            alt="favorite"
            v-show="addFavorite"
            @click="isAddFavorite(false)"
        />
    </div>
</template>
<script setup>
const addFavorite = ref(false);

function isAddFavorite(status) {
    addFavorite.value = status;
}
</script>
<style scoped></style>
