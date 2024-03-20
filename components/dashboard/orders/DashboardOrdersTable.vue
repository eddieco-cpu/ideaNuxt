<template>
    <div>
        <div class="flex justify-between items-center mb-3 flex-wrap gap-y-3" v-if="$route.fullPath.includes('orders')">
            <div class="flex justify-center items-center gap-x-2">
                <UiButton type="secondary" class="max-w-[122px]">
                    <UIcon name="i-heroicons-document-arrow-down" class="text-Primary-500-Primary text-sm" />
                    匯出出貨單</UiButton
                >
                <UiButton type="secondary" class="max-w-[155px]">
                    <UIcon name="i-heroicons-document-arrow-down" class="text-Primary-500-Primary text-sm" />
                    匯出贊助人資料</UiButton
                >
            </div>
            <div class="flex justify-center items-center gap-x-2 max-xl:w-full max-xl:justify-start">
                <USelectMenu
                    class="lg:h-[38px]"
                    size="lg"
                    v-model="selectOfTable"
                    :options="selectOptsOfTable"
                    placeholder="請選擇"
                    value-attribute="id"
                    option-attribute="name"
                >
                    <UButton
                        class="flex-1 justify-between w-[122px] h-[38px] ring-white"
                        color="white"
                        style="--tw-shadow: 0 1px 2px 0 rgb(0 0 0 / 0)"
                    >
                        <p class="font-light">
                            {{ selectOptsOfTable.find((el) => el.id === selectOfTable)?.name || "狀態" }}
                        </p>
                        <UIcon
                            name="i-heroicons-bars-3-bottom-right"
                            class="w-5 h-5 rotate-180 text-gray-400 dark:text-gray-500"
                        />
                    </UButton>
                </USelectMenu>

                <UInput placeholder="查詢" class="w-48">
                    <template #trailing>
                        <div class="w-9 h-full mr-[-14px] border-l-[1px] flex justify-center items-center">
                            <UIcon name="i-heroicons-magnifying-glass" class="w-5 h-5 flex-shrink-0 text-gray-500" />
                        </div>
                    </template>
                </UInput>
            </div>
        </div>
        <UCarousel v-slot="{ item }" :items="['1']" :ui="{ item: 'snap-start' }" class="max-w-[800px] mx-auto">
            <div>
                <UTable
                    :rows="datas"
                    :columns="columns"
                    :ui="{
                        thead: ' bg-Primary-100  rounded-t-lg',
                        tbody: ' bg-white shadow-md rounded-lg ',
                        th: {
                            base: 'text-left relative before:absolute before:content-[`h`]',
                            padding: 'p-4',
                            font: 'font-semibold',
                            size: 'text-sm',
                        },
                    }"
                    class="rounded-lg"
                >
                    <template #id-data="{ row }">
                        <nuxt-link
                            :to="`/dashboard/${$route.params.dashboardId}/orders/${row.id.val}`"
                            class="block text-Primary-500-Primary underline overflow-hidden whitespace-nowrap truncate max-w-[126px]"
                        >
                            {{ row.id.val }}
                        </nuxt-link>
                    </template>
                    <template #time-data="{ row }">
                        <p class="max-w-[126px]">{{ row.time.val }}</p>
                    </template>
                    <template #name-data="{ row }">
                        <p class="overflow-hidden whitespace-nowrap truncate max-w-[126px]">{{ row.name.val }}</p>
                    </template>
                    <template #amount-data="{ row }">
                        <p>{{ row.amount.val }}</p>
                    </template>
                    <template #payment-data="{ row }">
                        <p>{{ row.payment.val }}</p>
                    </template>
                    <template #status-data="{ row }">
                        <p
                            class="inline-block px-[6px] py-1 rounded ring-1 ring-Primary-500-Primary bg-Primary-50 text-Primary-500-Primary text-xs"
                        >
                            {{ row.status.val }}
                        </p>
                    </template>
                    <template #empty-state>
                        <div class="flex flex-col items-center justify-center py-16 gap-3">
                            <img src="~assets/images/dashboard/light.svg" alt="" />
                            <span class="text-[#787C85]">尚無資料</span>
                        </div>
                    </template>
                </UTable>
                <section
                    class="bg-white flex justify-end items-center rounded-b-lg border-t-[1px] border-gray-200 h-14 text-right max-xl:text-left max-xl:justify-start"
                >
                    <UiPagination
                        class="pagenation w-max"
                        :currentPage="currentPage"
                        :totalPages="totalPages"
                        @updateCurrentPage="updateCurrentPage"
                    />
                </section>
            </div>
        </UCarousel>
    </div>
</template>
<script setup>
//
const route = useRoute();

//
const selectOfTable = ref(null);
const selectOptsOfTable = ref([
    {
        id: "all",
        name: "全部",
    },
    {
        id: "reviewed",
        name: "已成立",
    },
    {
        id: "preparing",
        name: "備貨中",
    },
    {
        id: "delivering",
        name: "出貨中",
    },
    {
        id: "completed",
        name: "已完成",
    },
    {
        id: "canceled",
        name: "取消",
    },
]);

watch(selectOfTable, (newVal) => {
    console.log(newVal);
});

//
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
const allDatas = ref([
    // {
    //     id: "ID22092313548",
    //     time: "2022/06/16 14:00",
    //     name: "Lindsay Walton",
    //     amount: "NT$ 1,000",
    //     payment: "ATM 轉帳付款",
    //     status: "已成立",
    // },
]);
const datas = computed(() => {
    const start = (currentPage.value - 1) * 10;
    const end = start + 10;
    return allDatas.value.length
        ? allDatas.value.slice(start, end).map((el) => ({
              ...el,
              id: {
                  val: el.id,
                  class: " min-w-[150px] max-w-[150px]",
              },
              time: {
                  val: el.time,
                  class: "min-w-[150px] max-w-[150px]",
              },
              name: {
                  val: el.name,
                  class: "min-w-[150px] max-w-[150px]",
              },
              amount: {
                  val: el.amount,
                  class: "min-w-[150px] max-w-[150px]",
              },
              payment: {
                  val: el.payment,
                  class: "min-w-[130px] max-w-[130px]",
              },
              status: {
                  val: el.status,
                  class: "min-w-[70px] max-w-[70px]",
              },
          }))
        : [];
});

//
const currentPage = ref(1);
const totalPages = computed(() => Math.ceil(allDatas.value.length / 10));
const updateCurrentPage = (newPage) => {
    currentPage.value = newPage;
};

//
async function getReviewedOrdersData() {
    const data = await GET(`/api/dashboard/details/reviewed/orders`);
    if (!!data) {
        allDatas.value = data.orders;
    }
}
getReviewedOrdersData();
</script>
<style scoped>
.pagenation {
    zoom: 0.75;
}
</style>
