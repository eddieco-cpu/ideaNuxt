<template>
    <section>
        <section class="mb-7" v-if="!pending">
            <div class="flex gap-x-4 justify-center items-center mb-2 max-lg:flex-wrap">
                <DashboardIndexCard
                    :contentObj="price"
                    type="primary"
                    class="max-lg:w-full mb-2 flex-grow"
                />
                <DashboardIndexCard
                    :contentObj="time"
                    type="primary"
                    class="max-lg:w-full mb-2 flex-grow"
                />
            </div>
            <div class="flex gap-x-4 justify-center items-center max-lg:flex-wrap">
                <DashboardIndexCard
                    :contentObj="orderCount"
                    type="secondary"
                    class="w-1/3 max-lg:w-full mb-2"
                    :isLink="true"
                />
                <DashboardIndexCard
                    :contentObj="peopleCount"
                    type="secondary"
                    class="w-1/3 max-lg:flex-grow mb-2"
                />
                <DashboardIndexCard
                    :contentObj="average"
                    type="secondary"
                    class="w-1/3 max-lg:flex-grow mb-2"
                />
            </div>
        </section>
        <section>
            <UiTitle> 最新訂單 </UiTitle>
            <DashboardOrdersTable />
        </section>
    </section>
</template>

<script setup>


const authStore = useAuthStore();
const token     = authStore.token;


const route = useRoute();
const dashboardId = route.params.dashboardId;

await nextTick();

const { data, error, pending } = useCustomFetch("/getProjectForDashborad", {'project_id' : dashboardId }, token);

const price = computed( () => {
    return {
        'label': '累積集資金額',
        'amount': '$' + data.value.detail.price,
        'description': '$' + data.value.project.goal_price
    }
})


const time = computed( () => {
    const startDate = new Date(data.value.project.start_time);
  const endDate = new Date(data.value.project.end_time);
  const duration = Math.floor((endDate - startDate) / (1000 * 60 * 60 * 24)); // 毫秒转换为天

  return {
    label: '專案執行時間',
    amount: `${duration} 天`,
    description: `${data.value.project.start_time} - ${data.value.project.end_time}`,
  };

})


const orderCount = computed (() => {
    return {
        'label' : '累積訂單數',
        'amount' : data.value.detail.count
    }
})

const peopleCount = computed (() => {
    return {
        'label' : '總贊助人數',
        'amount' : data.value.detail.count
    }
})

const average = computed (() => {

    const amount = data.value.detail.price > 0 
        ? Math.floor(data.value.detail.price / data.value.detail.count)
        : 0;
        
    return {
        'label': '平均贊助金額',
        'amount': '$' + amount,
    }
})
        
</script>

