import { defineStore } from "pinia";

export const cartStore = defineStore("cart", () => {
    const cartList = ref([]);

    const selectProducts = ref([]);

    const totalPrice = computed(() => {
        return selectProducts.value.reduce((a, b) => a + b.price * b.qty, 0);
    });

    return { cartList, selectProducts, totalPrice };
});
