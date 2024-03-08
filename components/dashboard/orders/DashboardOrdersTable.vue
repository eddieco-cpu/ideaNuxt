<template>
    <div>
        <UCarousel v-slot="{ item }" :items="['1']" :ui="{ item: 'snap-start' }" class="max-w-[800px] mx-auto">
            <div>
                <UTable
                    :rows="datas"
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
                        <p
                            class="text-Primary-500-Primary underline overflow-hidden whitespace-nowrap truncate max-w-[126px]"
                        >
                            {{ row.id.val }}
                        </p>
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
                    class="bg-white flex justify-end items-center rounded-b-lg border-t-[1px] border-gray-200 h-14 text-right"
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
