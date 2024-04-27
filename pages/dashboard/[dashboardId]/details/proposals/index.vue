<template>
    <div>
        <section class="mb-3" v-if="pageStatus !== 'reviewed'">
            <UiButton class="max-md:w-full md:w-full" type="secondary" @click="toNewProposal">＋ 新增方案卡</UiButton>
        </section>

        <article>
            <UCarousel v-slot="{ it }" :items="['1']" :ui="{ item: 'snap-start' }" class="mx-auto">
                <ul class="flex justify-start items-center gap-x-2 mx-auto max-md:flex-col max-md:gap-x-0">
                    <li
                        v-for="(proposal, i) in proposals"
                        :key="proposal.id"
                        class="max-md:mb-2 max-md:mx-auto rounded-lg overflow-hidden bg-white"
                    >
                        <div class="flex justify-between items-center p-2">
                            <nuxt-link v-if="pageStatus !== 'reviewed'"
                                :to="`/dashboard/${$route.params.dashboardId}/details/proposals/${proposal.linkProposalsId}`"
                            >
                                <div class="flex-shrink-0 h-8 flex justify-center items-center group cursor-pointer">
                                    <UIcon
                                        name="i-heroicons-pencil-square"
                                        class="block w-5 h-5 text-Neutral-500-Primary text-Primary-500-Primary group-hover:text-Primary-400-Hover group-active:text-Primary-200"
                                    />
                                </div>
                            </nuxt-link>
                            <!-- <div class="flex justify-center items-center gap-x-4 px-1">
                                <UIcon
                                    name="i-heroicons-chevron-left"
                                    @click="moveToPrevItem(proposal, i)"
                                    class="block w-5 h-5 text-Neutral-500-Primary text-Primary-500-Primary group-hover:text-Primary-400-Hover group-active:text-Primary-200 cursor-pointer max-md:rotate-90"
                                />
                                <UIcon
                                    name="i-heroicons-chevron-right"
                                    @click="moveToNextItem(proposal, i)"
                                    class="block w-5 h-5 text-Neutral-500-Primary text-Primary-500-Primary group-hover:text-Primary-400-Hover group-active:text-Primary-200 cursor-pointer max-md:rotate-90"
                                />
                            </div> -->
                        </div>
                        <DashboardProposalsCard :item="proposal" class="w-[320px] min-h-[495px] !mb-0" />
                    </li>
                </ul>
            </UCarousel>
        </article>
    </div>
</template>
<script setup>
<<<<<<< HEAD
const route = useRoute();
const authStore = useAuthStore();
const token     = authStore.token;
=======
const route       = useRoute();
const authStore   = useAuthStore();
const token       = authStore.token;
>>>>>>> 1cdb0af (0427)
const dashboardId = route.params.dashboardId;
const pageStatus  = ref("edit"); // new, edit, reviewed

function toNewProposal() {
    const x = new Date().getTime();
    navigateTo(`/dashboard/${dashboardId}/details/proposals/${x}`);
}

const proposals = ref([]);

<<<<<<< HEAD
//


async function getReviewedProposalsData() {

    const data = await POST("/getProjectCardData", {'project_id' : dashboardId }, token);
    // const data = await GET(`/api/dashboard/details/reviewed/proposals`);
    console.log(data)
    if (!!data) {
        proposals.value = data
      
=======
async function getReviewedProposalsData() {

    const data = await POST("/getProjectCardData", {'project_id' : dashboardId }, token);
    if (!!data) {
        console.log(data.project)
        proposals.value = data.data;
        if(data.project?.review_status == 0 || data.project.review_status == 3) {
            pageStatus.value = 'reviewed'
        }
>>>>>>> 1cdb0af (0427)
    }
}
getReviewedProposalsData();

function moveToPrevItem(proposal, i) {
    const prevIndex = (i - 1 + proposals.value.length) % proposals.value.length;
    [proposals.value[i], proposals.value[prevIndex]] = [proposals.value[prevIndex], proposals.value[i]];
}
function moveToNextItem(proposal, i) {
    const nextIndex = (i + 1) % proposals.value.length;
    [proposals.value[i], proposals.value[nextIndex]] = [proposals.value[nextIndex], proposals.value[i]];
}

function doSave() {
    console.log("doSave");
}
</script>
