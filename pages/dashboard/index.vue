<template>
    <section>
        <section class="mb-7">
            <div class="flex gap-x-4 justify-center items-center mb-2 max-lg:flex-wrap">
                <DashboardIndexCard
                    :contentObj="{
                        label: '累積集資金額',
                        amount: '$ 0',
                        description: '$ 1,000,000',
                    }"
                    type="primary"
                    class="max-lg:w-full mb-2 flex-grow"
                />
                <DashboardIndexCard
                    :contentObj="{
                        label: '專案執行時間',
                        amount: '98 天',
                        description: '2022/06/16  - 2022/07/27',
                    }"
                    type="primary"
                    class="max-lg:w-full mb-2 flex-grow"
                />
            </div>
            <div class="flex gap-x-4 justify-center items-center max-lg:flex-wrap">
                <DashboardIndexCard
                    :contentObj="{
                        label: '累積訂單數',
                        amount: '2,234 筆',
                        description: '本週新增 24 筆，<a>前往出貨</a>',
                    }"
                    type="secondary"
                    class="w-1/3 max-lg:w-full mb-2"
                />
                <DashboardIndexCard
                    :contentObj="{
                        label: '總贊助人數',
                        amount: '980 人',
                    }"
                    type="secondary"
                    class="w-1/3 max-lg:flex-grow mb-2"
                />
                <DashboardIndexCard
                    :contentObj="{
                        label: '平均贊助金額',
                        amount: '$ 1800',
                    }"
                    type="secondary"
                    class="w-1/3 max-lg:flex-grow mb-2"
                />
            </div>
        </section>
        <section>
            <UiTitle> 最新訂單 </UiTitle>
            <div>
                <UTable
                    class="main-table"
                    :rows="people"
                    :columns="columns"
                    :ui="{
                        thead: ' bg-[#F8F8F8]',
                        tbody: ' bg-white shadow-md rounded-lg ',
                        th: {
                            base: 'text-left relative before:absolute before:content-[`h`]',
                            padding: 'p-4',
                            font: 'font-semibold',
                            size: 'text-sm',
                        },
                    }"
                >
                    <template #id-data="{ row }">
                        <p class="text-Primary-500-Primary underline">{{ row.id }}</p>
                    </template>
                    <template #status-data="{ row }">
                        <p
                            class="inline-block px-[6px] py-1 rounded ring-1 ring-Primary-500-Primary bg-Primary-50 text-Primary-500-Primary"
                        >
                            {{ row.status }}
                        </p>
                    </template>
                </UTable>
            </div>
        </section>
    </section>
</template>
<script setup>
const columns = [
    {
        key: "id",
        label: "訂單編號",
    },
    {
        key: "time",
        label: "時間",
    },
    {
        key: "name",
        label: "訂購人",
    },
    {
        key: "amount",
        label: "總金額",
    },
    {
        key: "payment",
        label: "付款方式",
    },
    {
        key: "status",
        label: "狀態",
    },
];

const people = [
    {
        id: "ID22092313548",
        time: "2022/06/16 14:00",
        name: "Lindsay Walton",
        amount: "NT$ 1,000",
        payment: "ATM 轉帳付款",
        status: "已成立",
    },
    {
        id: "ID22092313549",
        time: "2022/06/16 14:00",
        name: "Lindsay Walton",
        amount: "NT$ 1,000",
        payment: "ATM 轉帳付款",
        status: "已成立",
    },
    {
        id: "ID22092313551",
        time: "2022/06/16 14:00",
        name: "Lindsay Walton",
        amount: "NT$ 1,000",
        payment: "ATM 轉帳付款",
        status: "已成立",
    },
    {
        id: "ID22092313552",
        time: "2022/06/16 14:00",
        name: "Lindsay Walton",
        amount: "NT$ 1,000",
        payment: "ATM 轉帳付款",
        status: "已成立",
    },
];
</script>
<style scoped>
/* .main-table {
    outline: 1px solid orange;
} */
/* .main-table th:not(:first-child) {
    position: relative;
    outline: 1px solid orange;
}
.main-table th:not(:first-child)::after {
    content: "";
    display: block;
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 1px;
    height: 20px;
    background-color: orange;
} */
</style>
