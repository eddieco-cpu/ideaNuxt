<template>
    <div class="flex justify-between items-center">
        <nuxt-link to="/dashboard/details/proposals">編輯方案內容</nuxt-link>
        <span>{{ $route.params.proposalId }}</span>
    </div>
</template>
<script setup>
const route = useRoute();
</script>
