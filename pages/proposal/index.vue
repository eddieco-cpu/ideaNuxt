<template>
    <section class="overflow-hidden">
        <section class="py-[1px] mb-10 max-md:mb-0">
            <!--  -->
            <div
                class="mt-[182px] mb-[216px] max-w-[760px] mx-auto relative max-md:mt-[70px] max-md:mb-[88px] max-md:px-9"
            >
                <h1 class="text-[40px] leading-relaxed font-bold text-center max-md:text-[32px]">
                    將您的 <b class="text-Secondary-500-Primary">好創意</b><b class="max-md:hidden">，</b
                    ><br class="md:hidden" />
                    變成一門<b class="text-Secondary-500-Primary">好生意</b><b class="max-md:hidden">。</b>
                </h1>
                <p
                    class="text-[40px] leading-relaxed font-bold text-center pb-8 max-md:text-sm max-md:mt-5 max-md:pb-4"
                >
                    運用群眾的力量，讓您好點子再次被實現！
                </p>
                <div class="border-t-2 mx-auto pt-8 border-Primary-100 text-center max-md:pt-4 max-md:w-10/12">
                    <h2 class="text-2xl text-Primary-500-Primary font-bold mb-8 max-md:text-base max-md:mb-14">
                        idea2gether <br class="md:hidden" />
                        全台首創募資平台＋團購型網站
                    </h2>
                    <UiButton class="max-md:w-[147px] max-md:text-sm"
                        ><NuxtLink to="/proposal/submission">我要提案</NuxtLink></UiButton
                    >
                </div>
                <div
                    class="block w-[930px] h-[930px] rounded-[50%] absolute top-[-200%] right-[-100%] z-[-1] max-md:w-[352px] max-md:h-[352px] max-md:top-[-55%] max-md:right-[-40%]"
                >
                    <img src="~assets/images/proposal/c_1-1.png" class="max-md:hidden" />
                    <img src="~assets/images/proposal/mc_1-1.png" class="md:hidden" />
                </div>
                <div
                    class="block w-[704px] h-[704px] rounded-[50%] absolute top-[-70px] left-[-83%] z-[-1] max-md:w-[264px] max-md:h-[264px] max-md:top-auto max-md:bottom-[-35%] max-md:left-[-35%]"
                >
                    <img src="~assets/images/proposal/c_1-2.png" class="max-md:hidden" />
                    <img src="~assets/images/proposal/mc_1-2.png" class="md:hidden" />
                </div>
            </div>

            <!--  -->
            <UiContainer>
                <div class="flex justify-between items-start h-[671px] relative max-xl:h-auto">
                    <div
                        class="w-[590px] h-full overflow-hidden flex flex-col justify-center items-center max-xl:w-full"
                    >
                        <ProposalIntroCard
                            v-for="(intro, i) in proposalIntros"
                            :key="i"
                            :dataObj="intro"
                            class="my-5 max-md:my-3"
                            :class="{
                                'gradient-to-t': i === 0,
                                'gradient-to-b': i === 2,
                            }"
                        />
                    </div>
                    <div class="w-[590px] max-xl:hidden">
                        <template v-for="(intro, i) in proposalIntros" :key="i">
                            <ProposalIntroCard
                                v-if="i !== 1"
                                :dataObj="intro"
                                :class="{
                                    'mb-10': i === 0,
                                }"
                            />
                        </template>
                    </div>
                    <div
                        class="block w-[600px] h-[600px] m-auto rounded-[50%] absolute top-[-10%] left-0 right-0 z-[-1] max-md:hidden"
                    >
                        <img src="~assets/images/proposal/c_1-3.svg" class="opacity-50" />
                    </div>
                </div>
            </UiContainer>
        </section>
        <section class="py-20 bg-Primary-100 max-md:pt-10 max-md:pb-[60px]">
            <div class="overflow-hidden">
                <div class="flex justify-center items-center gap-x-14 max-md:flex-col">
                    <div class="flex flex-col items-center justify-center w-[446px] max-md:mb-8">
                        <h2 class="text-3xl text-Primary-500-Primary font-bold text-center mb-6 max-md:text-xl">
                            為什麼您該選擇群眾募資？
                        </h2>
                        <img src="~assets/images/proposal/demo_idea.png" class="block w-[446px] max-md:w-44" />
                    </div>
                    <ul>
                        <ProposalDemoListItem
                            v-for="(item, i) in demoList"
                            :key="i"
                            :dataObj="{ ...item, index: i + 1 }"
                            :class="
                                i !== 0 && i !== demoList.length - 1 ? ' max-md:my-8 md:my-16 md:ml-14' : 'md:mr-14'
                            "
                        />
                    </ul>
                </div>
            </div>
        </section>
        <section class="py-20">
            <section
                class="py-14 flex justify-center items-center mb-20 relative max-md:flex-col max-md:pt-0 max-md:pb-16 max-md:mb-[120px]"
            >
                <div class="w-72 text-left max-md:w-[200px]">
                    <h2 class="text-3xl text-Primary-500-Primary font-bold text-left mb-6 max-md:text-xl">
                        歡迎創作者們 <br />
                        您可以開始選擇提案...
                    </h2>
                    <UiButton
                        class="max-md:absolute max-md:bottom-0 max-md:right-0 max-md:left-0 max-md:mx-auto max-md:text-sm"
                        >我要提案</UiButton
                    >
                </div>
                <div
                    v-for="(type, t) in proposalTypes"
                    :key="t"
                    class="square-card relative w-[306px] h-[290px] ml-14 relative max-md:mx-auto max-md:w-[calc(100%-48px)] max-md:h-auto"
                    :class="t === 0 ? 'max-md:mb-6' : ''"
                >
                    <div
                        class="rounded-[48px] relative bg-white p-12 overflow-hidden shadow-card max-md:p-6 max-md:rounded-3xl"
                    >
                        <UIcon
                            :name="type.icon"
                            class="text-Primary-50 text-8xl font-black absolute top-[-16px] right-[-12px] scale-110"
                        ></UIcon>
                        <h3 class="text-2xl font-bold text-Primary-500-Primary mb-6">{{ type.title }}</h3>
                        <ul>
                            <li
                                v-for="(item, i) in type.lists"
                                :key="i"
                                class="flex items-center mb-4"
                                :class="i === type.lists.length - 1 ? 'max-md:mb-0' : ''"
                            >
                                <UIcon name="i-heroicons-light-bulb" class="text-Primary-500-Primary text-base"></UIcon>
                                <span class="text-Primary-500-Primary text-base">{{ " " + item }}</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
            <section class="w-[966px] mx-auto max-md:w-full">
                <h2 class="text-3xl text-Primary-500-Primary font-bold text-center mb-10 max-md:text-xl max-md:mb-6">
                    募資提案常見問題
                </h2>
                <div class="bg-white rounded-3xl px-[60px] py-5 max-md:rounded-none max-md:px-6 relative">
                    <UiHorizontalNav
                        :nav-items="navItems"
                        :activeNavItemId="activeNavItemId"
                        @updateNavItemId="updateNavItemId"
                        underlineClass="max-md:scale-x-[0.6]"
                        navItemClass="max-md:pb-2"
                    />
                    <section class="max-md:mt-10">
                        <template v-for="(content, i) in navItemContents">
                            <UiAccordion :items="content.datas" v-show="content.id === activeNavItemId" />
                        </template>
                    </section>

                    <!-- bg -->
                    <div
                        class="block w-[704px] h-[704px] rounded-[50%] absolute top-[-24%] right-[-40%] z-[-1] max-md:w-[200px] max-md:h-[200px] max-md:top-[-25%] max-md:right-[-20%]"
                    >
                        <img src="~assets/images/proposal/c_1-2.png" class="opacity-50" />
                    </div>
                    <div
                        class="block w-[520px] h-[520px] rounded-[50%] absolute top-[-35%] left-[-40%] z-[-1] max-md:w-[200px] max-md:h-[200px] max-md:top-[-15%] max-md:left-[-18%]"
                    >
                        <img src="~assets/images/proposal/c_3-2.png" class="opacity-80" />
                    </div>
                </div>
            </section>
        </section>
    </section>
</template>

<script setup>
import Icon from "assets/images/";
import { navItemIds, navItemContents } from "@/assets/others/proposal/data";

const proposalIntros = [
    {
        note: "關於團隊",
        title: "About Team",
        content: `愛上大數據是間專業服務品牌的「整合顧問團隊」。<br />
縮短您創業0到1的學習時間與延伸的資源耗損，我們服務超過數百家品牌與企業，整合所擅長的通路、倉儲、物流、媒體、行銷等全方位資源， 讓品牌端更能專注於開發與塑造自我的價值。`,
        photo: Icon.intro_1,
    },
    {
        note: "創辦理念",
        title: "Mission Statement",
        content: `臺灣寶島人才濟濟，不乏有創意的點子、品質優秀新商品與研發團隊，但總難遇到合適的執行團隊與合作夥伴，對於新創意更是一大壓力與損耗。我們希望藉由自己十多年來的品牌操作經驗與服務精神，跨領域的服務更多品牌與全新的idea，執行並且實現您創意的無限可能，讓您的好創意變成一門好的生意。`,
        photo: Icon.intro_2,
    },
    {
        note: "網紅推薦",
        title: "Influencer Pick",
        content: `我們相信，好的創意以及商品被實現上市後，更需要有好的媒體與渠道分享，才能夠達到共利共享的精神，大數據擁有近千位以上的空姐、網紅、KOL/KOC的名單與合作經驗，加上熱愛商品與分享的團媽、主購等資源，搭配專業的自媒體行銷團隊宣傳曝光，一直以來，我們協助許多品牌再造轉型，皆端出相當漂亮的成績單。`,
        photo: Icon.intro_3,
    },
];

const navItems = [
    {
        id: navItemIds[0],
        html: `<UIcon name="i-heroicons-light-bulb"></UIcon><span>提案問題</span>`,
    },
    {
        id: navItemIds[1],
        html: "結案問題",
    },
    {
        id: navItemIds[2],
        html: "其他問題",
    },
];
const activeNavItemId = ref(navItemIds[0]);
const updateNavItemId = (id) => {
    activeNavItemId.value = id;
};

const demoList = [
    {
        title: "取得資源與實踐創意",
        content:
            "正所謂「眾人之力才會大、眾人之財才會多」，您有個新的點子與創意，想在市場上實現與嘗試，但缺少資源與資金，那就相當適合透過群眾的力量，來實現您的夢想，結合您的創意，透過平台讓更多人看見，逐步的實現與落地執行。",
    },
    {
        title: "測試市場與接近顧客",
        content:
            "擁有資源後，沒有人能保證一定成功，您則可以透過募資來預先調查產品的特色是否足夠？產品是否符合消費者需求？創意是否被市場接受？針對專案來蒐集消費者對專案/產品的期待或建議，對於後續產品規劃、改良都會有顯著幫助！",
    },
    {
        title: "有特點才有賣點，品牌擴散非難事",
        content:
            "群眾募資在全世界已經相當盛行，idea2gether雖然不是第一個募資平台，但我們擁有一群願意嘗試、喜歡新奇商品的忠實顧客與會員，再結合網紅、KOL與喜歡商品的團主，能幫助您用低成本且快速實驗的方式，為品牌、商品做宣傳，再透過前期的宣傳曝光、擴散行銷，更能向每一位顧客，推廣您的品牌理念。",
    },
];
const proposalTypes = [
    {
        title: "群眾集資",
        lists: ["一次性專案", "平均集資40-60日", "募集完成計畫所需的資金", "達標後，一次性回饋贊助者"],
        icon: "i-heroicons-users",
    },
    {
        title: "訂閱專案",
        lists: ["長期行專案", "可持續進行至專案結束", "累積每月獲得的贊助", "持續性回饋贊助者"],
        icon: "i-heroicons-newspaper",
    },
];
</script>

<style scoped>
.square-card::after {
    content: "";
    position: absolute;
    display: block;
    top: 0;
    right: 0;
    transform: translate(40%, -40%);
    width: 176px;
    height: 176px;
    background-image: url("assets/images/proposal/c_2-1.png");
    background-position: center;
    background-size: contain;
    z-index: -1;
    opacity: 0.15;

    @media (max-width: 768px) {
        display: none;
    }
}
</style>
