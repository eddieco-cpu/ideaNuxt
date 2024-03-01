<template>
    <div>
        <UiButton class="max-md:w-full md:w-full" type="secondary" @click="toNewProposal">＋ 新增方案卡</UiButton>
    </div>
</template>
<script setup>
const route = useRoute();

//
function toNewProposal() {
    console.log("toNewProposal");
    const x = new Date().getTime();
    navigateTo(`/dashboard/details/proposals/${x}`);
}
</script>
