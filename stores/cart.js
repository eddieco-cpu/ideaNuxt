import { defineStore } from "pinia";

export const cartStore = defineStore("cart", () => {
    const cartList = ref([]);

    const selectGroupBuyProducts = ref([]);

    const totalGroupBuyPrice = computed(() => {
        return selectGroupBuyProducts.value.reduce((a, b) => a + b.price * b.qty, 0);
    });

    const selectFundRaiseProducts = ref([]);

    const totalFundRaisePrice = computed(() => {
        return selectFundRaiseProducts.value.reduce((a, b) => a + b.price * b.qty, 0);
    });

    return { cartList, selectGroupBuyProducts, selectFundRaiseProducts, totalGroupBuyPrice, totalFundRaisePrice };
});
