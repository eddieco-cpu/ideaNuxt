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
            :index="index + 1"
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

const authStore = useAuthStore();
const token = authStore.token;

const addressInfo = ref([]);


getAddress();


async function getAddress () {
    const data = await POST("/getAddress", {}, token);

    if(!!data.status) {
        addressInfo.value = data.data
    }
}

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
        tempAddress.value = { ...addressInfo.value.find((item, i) => i === index), index };
        
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
    tempAddress.value = null;
}

async function onSubmit(data, isEditmode) {
    console.log(data)
    const { index, name, phone, email, address, defaultAddress, zipCode, city, district } = data;

    const payload = {
        index,
        defaultAddress,
        name,
        phone,
        email,
        address,
        zipCode,
        city,
        district,
        
    };

    const check = ref(false);

    if (isEditmode) {
        
        const addressId = addressInfo.value[index].id;

        payload.id = addressId;
        
        
        const data =  await POST("/editAddress", payload, token);


        if(!!data.status) {
            check.value = true;
        }
    } else {
        
        const data = await POST("/addAddress", payload, token);

        if(!!data.status) {
            check.value = true;
        }
    }

    if (defaultAddress) {
        setDefaultAddress(index - 1);
    }

    if(check.value) {
        getAddress();
        tempAddress.value = null;
    }
}
</script>

<style scoped></style>
