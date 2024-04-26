<template>
  <section class="max-w-[1090px] mx-auto max-xl:px-6 max-xl:py-4 max-md:px-0">
    <div v-if="projectData">
      <section class="pt-12 pb-5 max-md:px-6 max-md:pt-1 max-md:pb-3">
        <UBreadcrumb
          divider="/"
          :links="[
            { label: '首頁', to: '/' },
            // { label: '群眾集資' },
            // { label: '3C科技', to: '/category/technology-ai?type=fundraise' },
          ]"
          :ui="{
            active: 'text-black font-bold max-md:font-normal',
            inactive: 'text-Neutral-600-Dark-Primary font-normal max-md:font-normal',
            li: '!font-normal max-md:text-xs',
          }"
        />
      </section>

      <!--  -->
      <section class="grid grid-rows-1 grid-cols-[auto_auto] gap-6 mb-7 max-xl:grid-rows-[auto_auto] max-xl:grid-cols-1 max-md:px-6 max-md:gap-0">
        <!-- slider -->
        <section class="w-[626px] h-[408px] aspect-[313/204] rounded-lg py-1 max-xl:w-full max-xl:aspect-auto max-xl:py-0 max-md:h-auto max-md:aspect-auto">
          <ProductsSlider :slides="projectData.data.photo" />
        </section>

        <!-- product details -->
        <article class="w-[436px] max-xl:w-auto">
          <div class="mb-5 max-md:translate-y-[-4px]">
            <b class="inline-block rounded px-2 py-1 bg-Status-Color-Danger-500-Primary text-white font-light">促銷</b>
          </div>
          <p class="mb-1">
            <span class="text-sm font-normal">提案人</span>
            <b class="text-Primary-500-Primary text-sm font-normal mx-1">{{ projectData.data.user_name }}</b>
          </p>
          <h1 class="font-medium text-xl mb-6">
            {{ projectData.data.name }}
          </h1>
          <p class="text-Neutral-600-Dark-Primary text-sm font-normal mb-6">
            {{ projectData.data.description }}
          </p>
          <div class="flex justify-between items-end mb-2">
            <h2 class="text-3xl font-bold max-md:text-xl">$ {{ projectData.data.price }}</h2>
            <p class="text-Neutral-600-Dark-Primary text-xs">
              目標金額
              <span>$ {{ projectData.data.goal_price }}</span>
            </p>
          </div>

          <!-- % -->
          <div class="flex items-center gap-3 mt-1 mb-1">
            <UMeter :value="projectData.data.achievementRate" :ui="{ meter: { color: 'text-Primary-500-Primary', background: 'bg-Primary-50' } }" color="violet" />
            <span class="text-Primary-500-Primary font-medium text-xs">{{ projectData.data.achievementRate }}%</span>
          </div>

          <div class="flex justify-between items-center mb-6 max-md:block">
            <p class="text-xs text-Neutral-600-Dark-Primary">
              募資時間 <span>{{ projectData.data.start_time }}</span> - <span>{{ projectData.data.end_time }}</span>
            </p>
            <div class="inline-flex justify-between items-center max-md:mt-2">
              <p class="mr-3 ring-1 ring-Primary-200 rounded flex justify-center items-center p-1">
                <img src="~assets/images/icon/clock-icon.svg" alt="clock" width="12" />
                <span class="ml-1 text-Primary-600-Dark-Primary text-sm">{{ projectData.data.dataTime }}日</span>
              </p>
              <p class="ring-1 ring-Primary-200 rounded flex justify-center items-center p-1">
                <img src="~assets/images/icon/user-icon.svg" alt="clock" width="12" />
                <span class="ml-1 text-Primary-600-Dark-Primary text-sm">{{ projectData.data.people }}人</span>
              </p>
            </div>
          </div>

          <div class="flex justify-between items-center max-xl:fixed max-xl:z-10 max-xl:bottom-0 max-xl:left-0 max-xl:w-full max-xl:bg-white max-xl:px-4 max-xl:py-2 max-md:gap-x-3">
            <!-- <button
                            @click="setIsFavorite($event, !isFavorite)"
                            class="w-12 h-12 rounded-lg ring-2 ring-Neutral-500-Primary flex justify-center items-center max-xl:w-9 max-xl:h-9 max-xl:ring-1"
                            :class="isFavorite ? 'ring-[#FF4D4F]' : 'ring-Neutral-500-Primary'"
                        >
                            <ProductsHeartActive v-if="isFavorite" class="xl:scale-[1.33]" />
                            <ProductsHeartInActive v-else class="xl:scale-[1.33]" />
                        </button> -->

            <UiButton class="min-w-[370px] min-h-12 max-md:min-w-40 max-md:flex-grow max-xl:min-h-9 max-xl:h-9" @click="addToCart"> 立即贊助 </UiButton>
          </div>

          <!-- @click="() => $router.push('/products/funding/1')" -->
        </article>
      </section>

      <!--  -->
      <section class="bg-white mb-4 rounded-lg sticky top-[74px] z-[2] max-md:top-[51px]">
        <div class="w-80 px-6">
          <UiHorizontalNav :nav-items="navItems" :activeNavItemId="activeNavItemId" @updateNavItemId="updateNavItemId" />
        </div>
      </section>

      <!--  -->
      <section class="grid grid-cols-[627fr_446fr] gap-6 xl:w-[calc(100%+10px)] max-xl:grid-cols-1 grid-rows-[auto_auto]">
        <!-- sticky mt-auto bottom-0 -->
        <section class="max-xl:relative xl:sticky xl:mt-auto bottom-0 xl:min-h-[calc(100vh-48px-75px)]" :class="lockMaxHeightInMobile && activeNavItemId === 'a' ? `max-md:max-h-[${maxHeight}px] overflow-hidden` : 'max-md:max-h-[auto]'">
          <!--  -->
          <div v-if="activeNavItemId === 'a' && articleRefHeight > maxHeight" class="md:hidden flex flex-col-reverse absolute bottom-0 left-0 z-[2] w-full pb-8 pt-32 px-20 bg-gradient-to-t from-white to-transparent" :class="lockMaxHeightInMobile ? '' : ' hidden'">
            <UiButton class="max-md:w-full" type="secondary" @click="lockMaxHeightInMobile = false">查看完整說明</UiButton>
          </div>

          <template v-if="activeNavItemId === 'a'">
            <article class="bg-white p-6 rounded-lg" ref="articleRef">
              <div v-html="projectData.data.content"></div>
            </article>
          </template>
          <!-- <template v-if="activeNavItemId === 'b'">
                        <article class="bg-white p-6 rounded-lg">
                            <ProductsAccordionTypeB />
                        </article>
                    </template> -->
          <template v-if="activeNavItemId === 'c'">
            <article class="bg-white p-6 rounded-lg">
              <UiAccordion :items="projectData.data.questions" />
            </article>
          </template>
        </section>

        <!-- sticky mt-auto bottom-0 -->
        <ul class="card_group xl:sticky xl:mt-auto bottom-0 xl:h-[calc(100vh-48px-75px)] xl:overflow-y-auto max-md:px-6">
          <!-- <template
                        v-for="(faq) in productsWithSoldOut"
                        :key="faq.id"
                    >
                        <li
                            class="bg-white p-6 rounded-lg border-2 border-Primary-100 mb-5 relative xl:mr-[5px]"
                            :class="faq.soldOut ? 'opacity-50' : 'opacity-100'"
                        >
                            <p
                                :class="
                                    faq.soldOut
                                        ? 'm-auto inline-flex justify-center items-center absolute top-0 left-0 right-0 bottom-0 text-white bg-gray-500 rounded text-xl w-40 h-9 z-[1]'
                                        : ' hidden'
                                "
                            >
                                - 方案已售完 -
                            </p>

                            <picture class="block w-full mb-4 aspect-[396/142] max-md:aspect-[283/100]">
                                <img :src="faq.image" alt="" class="block w-full h-full object-cover" />
                            </picture>
                            <div class="flex justify-start items-center mb-3">
                                <p class="inline-block px-[6px] py-1 rounded text-xs text-white bg-Primary-400-Hover mr-2">
                                    已支持{{faq.sell_qty}}人
                                </p>
                                <p class="inline-block px-[6px] py-1 rounded text-xs text-white bg-Primary-400-Hover">
                                    剩餘{{faq.stock_left}}組
                                </p>
                            </div>
                            <h3 class="text-base font-medium mb-1">{{faq.title}}</h3>
                            <p class="text-Status-Color-Danger-500-Primary text-xl font-medium mb-2">
                                NT${{faq.sell_price}}
                                <span class="text-xs font-normal opacity-80 line-through">定價 ${{faq.original_price}}</span>
                                <span class="text-xs font-normal opacity-80">，現省 ${{faq.save_price}}</span>
                            </p>
                            <div class="h-[1px] bg-gray-300 mb-2"></div>
                            <div class="mb-4">
                                <p class="text-xs font-medium text-gray-700 leading-5 mb-2">商品內容：</p>
                                <p class="text-xs mb-2" v-html="faq.content"></p>
                            </div>
                            <div class="mb-2">
                                <p class="text-xs font-medium text-gray-700 leading-5 mb-2">商品備註：</p>
                                <p class="text-xs mb-2" v-html="faq.remark"></p>
                            </div>
                            <div class="h-[1px] bg-gray-300 mb-2"></div>
                            <p></p>
                        </li>
                    </template> -->
          <template v-for="prod in productsWithSoldOut" :key="prod.id">
            <ProductsFundraise :prod="prod" @click="addToCart" />
          </template>
        </ul>
      </section>
    </div>
  </section>
</template>

<script setup>
import { useToast } from "vue-toastification";
const toast = useToast();
const route = useRoute();
const authStore = useAuthStore();

const isDisabled = ref(true);

const { data: projectData } = useCustomGetFetch(`/frontend/getProject?product_id=${route.params.pid}`);

console.log(projectData.value);

const isFavorite = ref(false);

function addToCart(params) {
  // if(!authStore.isLogin) {
  //     toast.error('請先登入會員');
  //     return;
  // }
  navigateTo(`/cart/cart-fundraise?id=${route.params.pid}`);
}

const pageData = ref([]);
const cards = ref([]);
const groupId = ref(parseInt(route.params.pid));

// getDatas()
async function getDatas() {
  const queryParam = `?type=fundraise&product_id=${route.params.pid}`;
  const data = await GET(`/frontend/getProject${queryParam}`, 1);
  if (!!data) {
    pageData.value = data.data;
    cards.value = data.data.cards;
  }
}

const productsWithSoldOut = computed(() =>
  projectData.value.data.cards.map(project => ({
    id: project.id, // 假設ID前綴，需要具體規則可自行調整
    projectName: project.title,
    originalPrice: project.original_price,
    specialOffer: project.sell_price,
    salesLimit: project.limit_qty - project.sell_qty > 0,
    salesLimitedQuantity: project.limit_qty,
    sponsors: project.sell_qty,
    content: project.content, // 將 content 包裝為數組
    specification: [project.remark || "無特別說明"], // 預設值為"無特別說明"
    imgData: project.image,
    soldOut: project.sell_qty >= project.limit_qty,
  })),
);

function setIsFavorite(e, status) {
  e.stopPropagation();

  isFavorite.value = status;

  if (status) {
    toast.success("已加入購物車");
  } else {
    toast.error("已取消加入購物車");
  }
}

const lockMaxHeightInMobile = ref(true);
const maxHeight = ref(700);
const articleRef = ref(null);
const articleRefHeight = ref(0);

//
onMounted(() => {
  if (articleRef.value) {
    articleRefHeight.value = articleRef.value.offsetHeight;
  }
});

//
const prods = ref([]);

async function getProdsData() {
  const data = await GET(`/api/productsFundraise`);
  if (!!data) {
    console.log("--------------");
    console.log(data.prods);
    prods.value = data.prods.map((el, i) => ({
      ...el,
    }));
  }
}
getProdsData();

const progressMeter = 300;

const navItems = [
  {
    id: "a",
    html: `專案內容`,
  },
  // {
  //     id: "b",
  //     html: "進度更新",
  // },
  {
    id: "c",
    html: "常見問題",
  },
];
const activeNavItemId = ref("a");
const updateNavItemId = id => {
  activeNavItemId.value = id;
};
</script>
