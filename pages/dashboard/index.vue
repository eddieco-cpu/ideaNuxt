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
            <DashboardOrdersTable />
        </section>
    </section>
</template>
