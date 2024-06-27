import { defineStore } from "pinia";

export const cartStore = defineStore("cart", () => {
    
        const isHaveCartItem = ref(false);

        const cartList = ref({});

        const isCartEmpty = computed(() => {
            const arr = Object.keys(cartList.value);

            return arr.length === 0;
        });

        const checkCartItem = async () =>  {
    
            const data  = await POST('/checkCartItem', {} , '');
    
            if(data) {
                isHaveCartItem.value = true;
            } else {
                isHaveCartItem.value = false;
            }
        }

        const selectGroupBuyProducts = ref({});

        const totalGroupBuyPrice = computed(() => {
            return selectGroupBuyProducts.value?.products?.reduce((a, b) => a + b.price * b.qty, 0) ?? 0;
        });

        const selectFundRaiseProducts = ref([]);
    

        const totalFundRaisePrice = computed(() => {
            return selectFundRaiseProducts.value.reduce((a, b) => a + b.specialOffer, 0);
        });

        return {
            cartList,
            isCartEmpty,
            selectGroupBuyProducts,
            selectFundRaiseProducts,
            totalGroupBuyPrice,
            totalFundRaisePrice,
            isHaveCartItem,
            checkCartItem
        };
    },
    {
        persist: process.client ? true : false,
    }
);
