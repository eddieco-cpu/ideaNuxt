<template>
        <div class="max-w-80 md:max-w-[1200px] mt-6 mx-auto md:grid md:grid-cols-12 md:gap-x-6 md:mt-10" >
        <!-- 下拉選單 -->
        <div class="grid grid-cols-2 gap-3 md:flex md:flex-col md:col-span-2" v-if = "category && category.data.length > 0">
            <USelectMenu
                optionAttribute="name"
                variant="none"
                size="lg"
                class="border border-Neutral-100 rounded-md bg-white"
                placeholder="集資/團購"
                v-model="typeSelected"
                :options="type"
            />

            <!-- 手機版分類 -->
            <USelectMenu
                optionAttribute="namee"
                variant="none"
                size="lg"
                class="border border-Neutral-100 rounded-md bg-white md:hidden"
                v-model="categorySelected"
                :options="category.data"
            />

            <!-- 桌機版分類 -->
            <div class="hidden md:block px-4 py-3">
                <h2 class="text-Neutral-900 text-xl font-medium mb-7">分類</h2>

                <div class="flex flex-col gap-y-5 items-start">
                    <NuxtLink :to="item.link" class="text-Neutral-900" v-for="(item,index) in tt" :key="index">
                        {{ item.name }}
                    </NuxtLink>
                </div>
            </div>
        </div>
        <NuxtPage class="md:col-span-10" />
    </div>
        
    
</template>

<script setup>
const route = useRoute();

const type = ref([
    { name: "集資", query: "fundraise" },
    { name: "團購", query: "groupbuying" },
]);
const typeSelected = ref(type.value[0]);

if (route.query.type) {
    typeSelected.value = type.value.find((item) => item.query === route.query.type);
}
const categoryUrl = ref();
categoryUrl.value = `/frontend/getCategory?type=${route.query.type}&page=category`;

const categorySelected = ref();

const { data:category, refresh:categoryDataRefresh }  = useCustomGetFetch(categoryUrl.value);

if(category.value && category.value?.data.length > 0) {
    categorySelected.value = category.value.data[0]
}

const tt = computed(() => {
    
  if (category.value && Array.isArray(category.value.data)) {
    return category.value.data.map(item => {
      
      const updatedLink = `/category/${item.name}?type=${route.query.type}&&page=category`;  // 修改这里根据你的需求
      return {
        ...item,
        link: updatedLink 
      };
    });
  }
  return [];
});

watch(typeSelected, async (newValue) => {
    
    await navigateTo({
        path: route.path,
        query: {
            type: newValue.query,
        },
    });
});

watch(
    () => route.query,
    (query) => {
        if (!!query?.type) {
            typeSelected.value = type.value.find((item) => item.query === query.type);

            if (process.client) {
                window.scrollTo({
                    top: 0,
                });
            }
        }
    },
    { immediate: true },
);



watch(categorySelected, async (newValue) => {
    await navigateTo(`${newValue.link}`);
});
</script>

<style scoped>
.router-link-exact-active {
    color: #6b56ca;
}
</style>
