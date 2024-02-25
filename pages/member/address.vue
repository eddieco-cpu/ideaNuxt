<template>
    <div class="flex flex-col gap-y-3">
        <h1 class="text-xl">我的地址</h1>

        <button
            class="flex gap-x-1 items-center justify-center w-full rounded-lg bg-white border border-Primary-100 py-2"
            @click="editAddress(undefined, false)"
        >
            <img src="~assets/images/icon/plus-icon.svg" alt="add" />
            <span class="text-Primary-400-Hover text-sm">新增地址</span>
        </button>

        <MemberEditAddress
            v-bind="tempAddress"
            :isEditmode="isEditmode"
            @onAbort="onAbort"
            @onSubmit="onSubmit"
            v-if="tempAddress"
        />

        <CardMemberAddress
            v-for="(item, index) in addressInfo"
            :key="index"
            v-bind="item"
            @setDefaultAddress="setDefaultAddress"
            @editAddress="editAddress"
        />

        <!-- 空值圖 -->
        <div class="w-[300px] mx-auto mt-16" v-if="addressInfo.length === 0">
            <img src="~assets/images/status/emptyDataAddress.png" alt="noData" width="300" />
        </div>
    </div>
</template>

<script setup>
const addressInfo = ref([
    {
        index: 1,
        defaultAddress: true,
        name: "陳大明",
        phone: "0911123456",
        email: "fake@hotmail.com",
        address: "新北市淡水區",
    },
    {
        index: 2,
        defaultAddress: false,
        name: "王小美",
        phone: "0922321123",
        email: "fake@hotmail.com",
        address: "台北市信義區",
    },
]);

const isEditmode = ref(false);
const tempAddress = ref(null);

function setDefaultAddress(index) {
    addressInfo.value = addressInfo.value.map((item, i) => {
        item.defaultAddress = i === index;

        return { ...item };
    });
}

async function editAddress(index, isEdit) {
    tempAddress.value = null;
    isEditmode.value = isEdit;

    await nextTick();

    if (isEdit) {
        // 編輯地址
        tempAddress.value = addressInfo.value.find((item, i) => i === index);
    } else {
        // 新增地址
        tempAddress.value = {
            index: Math.max(Math.max(...addressInfo.value.map((item) => item.index)), 0) + 1,
        };
    }
}

function onAbort(payload) {
    if (payload.title === "刪除") {
        addressInfo.value = addressInfo.value.filter((item) => item.index !== payload.index);
    }
    console.log("payload.index", payload.index);
    tempAddress.value = null;
}

function onSubmit(data, isEditmode) {
    const { index, name, phone, email, address, defaultAddress } = data;

    const payload = {
        index,
        defaultAddress,
        name,
        phone,
        email,
        address,
    };

    if (isEditmode) {
        // 編輯地址
        console.log("編輯地址");
    } else {
        // 新增地址
        addressInfo.value.push(payload);
    }

    if (defaultAddress) {
        // 是否設預設
        setDefaultAddress(index - 1);
    }
    console.log("addressInfo", addressInfo.value);
    tempAddress.value = null;
}
</script>

<style scoped></style>
