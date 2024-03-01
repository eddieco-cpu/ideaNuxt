<template>
    <div>
        <section class="mb-3">
            <UiButton class="max-md:w-full md:w-full" type="secondary" @click="toNewProposal"
                >＋ 新增常見問與答</UiButton
            >
        </section>

        <article class="border-[1px] border-[Primary-100] rounded-lg py-6 bg-white">
            <div>
                <!-- <UiAccordion /> -->
                <p>123</p>
                <DashboardDraggable />
            </div>
        </article>
    </div>
</template>
<script setup>
const route = useRoute();

//
function toNewProposal() {
    console.log("to new faq");
    const x = new Date().getTime();
    navigateTo(`/dashboard/details/faq/${x}`);
}
</script>
