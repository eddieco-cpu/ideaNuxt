<template>
    <section>
        <section>
            <UiTitle> 訂單總覽 </UiTitle>
            <div class="flex justify-between items-center">
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

                <div class="flex justify-center items-center gap-x-2">
                    <UDropdown v-model:open="open" :items="dropdownItems" :popper="{ placement: 'bottom-start' }">
                        <UButton
                            color="white"
                            :label="dropdownValue || '請選擇'"
                            class="min-w-[210px]"
                            :class="dropdownValue ? 'text-Neutral-900-Primary' : 'text-Neutral-500-Primary'"
                        />
                        <UIcon
                            name="i-heroicons-chevron-down-20-solid"
                            class="text-2xl flex justify-center items-center h-8 ml-[-32px] pointer-events-none"
                        />
                    </UDropdown>
                </div>
            </div>
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

//
const dropdownValue = ref("");
const dropdownItems = [
    [
        {
            label: "A category",
            click: function () {
                dropdownValue.value = this.label;
            },
        },
        {
            label: "B category",
            click: function () {
                dropdownValue.value = this.label;
            },
        },
        {
            label: "C category",
            click: function () {
                dropdownValue.value = this.label;
            },
        },
    ],
];

const open = ref(false);
defineShortcuts({
    o: () => (open.value = !open.value),
});
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
