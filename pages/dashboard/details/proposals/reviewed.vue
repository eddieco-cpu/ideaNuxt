<template>
    <div>
        <UCarousel v-slot="{ item }" :items="[1]" :ui="{ item: 'snap-start' }" class="mx-auto mb-4">
            <ul class="flex justify-start items-center gap-x-2 mx-auto max-md:flex-col max-md:gap-x-0">
                <li v-for="proposal in reviewedProposals" :key="proposal.id" class="max-md:mb-2 max-md:mx-auto">
                    <DashboardProposalsCard :item="proposal" class="w-[320px] min-h-[420px]" />
                </li>
            </ul>
        </UCarousel>
    </div>
</template>
<script setup>
const route = useRoute();

//
const reviewedProposals = ref([
    {
        id: 1,
        projectName: "商品名稱",
        projectPreview: helperPicture(),
        specialOffer: 1000,
        originalPrice: 2000,
        salesLimit: true,
        salesLimitedQuantity: 10,
        sponsors: 5,
        content: "商品內容",
        specification: "商品規格",
        deliveryTime: "2022-12-31",
        deliveryWays: ["deliveInCountry", "deliveToStore", "deliveToHouse"],
        deliveToStoreFee: 50,
    },
    {
        id: 2,
        projectName: "商品名稱",
        projectPreview: helperPicture(),
        specialOffer: 1000,
        originalPrice: 2000,
        salesLimit: true,
        salesLimitedQuantity: 10,
        sponsors: 6,
        content: "商品內容",
        specification: "商品規格",
        deliveryTime: "2022-12-31",
        deliveryWays: ["deliveInCountry", "deliveToStore", "deliveToHouse"],
        deliveToStoreFee: 50,
    },
    {
        id: 3,
        projectName: "商品名稱",
        projectPreview: helperPicture(),
        specialOffer: 1000,
        originalPrice: 2000,
        salesLimit: true,
        salesLimitedQuantity: 10,
        sponsors: 0,
        content: "商品內容",
        specification: "商品規格",
        deliveryTime: "2022-12-31",
        deliveryWays: ["deliveInCountry", "deliveToStore", "deliveToHouse"],
        deliveToStoreFee: 50,
    },
    {
        id: 4,
        projectName: "商品名稱",
        projectPreview: helperPicture(),
        specialOffer: 1000,
        originalPrice: 2000,
        salesLimit: true,
        salesLimitedQuantity: 10,
        sponsors: 15,
        content: "商品內容",
        specification: "商品規格",
        deliveryTime: "2022-12-31",
        deliveryWays: ["deliveInCountry", "deliveToStore", "deliveToHouse"],
        deliveToStoreFee: 50,
    },
    {
        id: 5,
        projectName: "商品名稱",
        projectPreview: helperPicture(),
        specialOffer: 1000,
        originalPrice: 2000,
        salesLimit: true,
        salesLimitedQuantity: 10,
        sponsors: 9,
        content: "商品內容",
        specification: "商品規格",
        deliveryTime: "2022-12-31",
        deliveryWays: ["deliveInCountry", "deliveToStore", "deliveToHouse"],
        deliveToStoreFee: 50,
    },
]);
</script>
