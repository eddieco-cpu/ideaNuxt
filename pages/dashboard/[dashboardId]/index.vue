<template>
    <section v-if="data">
        <section class="mb-7" >
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


const route = useRoute();
const dashboardId = route.params.dashboardId;


const { data, error } = useCustomFetch("/getProjectForDashborad", {'project_id' : dashboardId }, '');
console.log(data.value)

const price = computed( () => {
    if(data.value?.project) {
        return {
        'label': '累積集資金額',
        'amount': '$' + data.value?.detail.price,
        'description': '$' + data.value.project?.goal_price
    }
    } else {
        return [];
    }
})


const time = computed( () => {
    if(data.value?.project) {
        const startDate = new Date(data.value.project.start_time);
        const endDate = new Date(data.value.project.end_time);
        const duration = Math.floor((endDate - startDate) / (1000 * 60 * 60 * 24)); // 毫秒转换为天

        return {
            label: '專案執行時間',
            amount: `${duration} 天`,
            description: `${data.value.project?.start_time} - ${data.value.project?.end_time}`,
        };
    } else {
        return []
    }
})


const orderCount = computed (() => {
    if(data.value?.project) {
        return {
        'label' : '累積訂單數',
        'amount' : data.value.detail.count
    }
    } else {
        return []
    }
})

const peopleCount = computed (() => {
    if(data.value?.project) {
        return {
        'label' : '總贊助人數',
        'amount' : data.value.detail.count
    }
    } else {
        return []
    }
})

const average = computed (() => {
    if(data.value?.project) {
        const amount = data.value.detail.price > 0 
        ? Math.floor(data.value.detail.price / data.value.detail.count)
        : 0;
        
    return {
        'label': '平均贊助金額',
        'amount': '$' + amount,
    }
    } else {
        return []
    }
})
        
</script>

