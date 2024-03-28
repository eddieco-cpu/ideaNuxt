<template>
    <div>
        <UCarousel v-slot="{ item }" :items="[1]" :ui="{ item: 'snap-start' }" class="mx-auto mb-4">
            <ul class="flex justify-start items-center gap-x-2 mx-auto max-md:flex-col max-md:gap-x-0">
                <li v-for="proposal in reviewedProposals" :key="proposal.id" class="max-md:mb-2 max-md:mx-auto">
                    <DashboardProposalsCard :item="proposal" class="w-[320px] min-h-[495px]" />
                </li>
            </ul>
        </UCarousel>
    </div>
</template>
<script setup>
const route = useRoute();

//
const reviewedProposals = ref([]);

//
async function getReviewedProposalsData() {
    const data = await GET(`/api/dashboard/details/reviewed/proposals`);
    if (!!data) {
        reviewedProposals.value = data.proposals.map((el, i) => ({
            ...el,
        }));
    }
}
getReviewedProposalsData();
</script>
