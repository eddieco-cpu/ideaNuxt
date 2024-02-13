<template>
    <section class="overflow-hidden">
        <section class="py-[1px] mb-10">
            <div class="mt-[182px] mb-[216px] w-[760px] mx-auto ring-1 relative">
                <h1 class="text-[40px] leading-relaxed font-bold text-center pb-8">
                    將您的 <b class="text-Secondary-500-Primary">好創意</b>，變成一門
                    <b class="text-Secondary-500-Primary">好生意</b>。<br />
                    運用群眾的力量，讓您好點子再次被實現！
                </h1>
                <div class="border-t-2 pt-8 border-Primary-100 text-center">
                    <h2 class="text-2xl text-Primary-500-Primary font-bold mb-8">
                        idea2gether 全台首創募資平台＋團購型網站
                    </h2>
                    <UiButton>我要提案</UiButton>
                </div>
                <div
                    class="block w-[930px] h-[930px] rounded-[50%] absolute top-[-200%] right-[-100%] z-[-1]"
                    :style="circleBg"
                ></div>
                <div
                    class="block w-[704px] h-[704px] rounded-[50%] absolute top-[-70px] left-[-83%] z-[-1]"
                    :style="circleBg"
                ></div>
            </div>
            <UiContainer>
                <div class="flex justify-between items-start h-[671px]">
                    <div class="w-[590px] h-full overflow-hidden flex flex-col justify-center items-center">
                        <ProposalIntroCard
                            v-for="(card, i) in 3"
                            :dataObj="{
                                note: '創辦理念',
                                title: 'Mission Statement',
                                content: `臺灣寶島人才濟濟，不乏有創意的點子、品質優秀新商品與研發團隊，但總難遇到合適的執行團隊與合作夥伴，對於新創意更是一大壓力與損耗。我們希望藉由自己十多年來的品牌操作經驗與服務精神，跨領域的服務更多品牌與全新的idea，執行並且實現您創意的無限可能，讓您的好創意變成一門好的生意。`,
                                photo: 'intro_2.png',
                            }"
                            class="my-5"
                            :key="i"
                        />
                    </div>
                    <div class="w-[590px]">
                        <ProposalIntroCard
                            :dataObj="{
                                note: '關於團隊',
                                title: 'About Team',
                                content: `愛上大數據是間專業服務品牌的「整合顧問團隊」。<br />
縮短您創業0到1的學習時間與延伸的資源耗損，我們服務超過數百家品牌與企業，整合所擅長的通路、倉儲、物流、媒體、行銷等全方位資源， 讓品牌端更能專注於開發與塑造自我的價值。`,
                                photo: 'intro_1.png',
                            }"
                            class="mb-10"
                        />
                        <ProposalIntroCard
                            :dataObj="{
                                note: '網紅推薦',
                                title: 'Influencer Pick',
                                content: `我們相信，好的創意以及商品被實現上市後，更需要有好的媒體與渠道分享，才能夠達到共利共享的精神，大數據擁有近千位以上的空姐、網紅、KOL/KOC的名單與合作經驗，加上熱愛商品與分享的團媽、主購等資源，搭配專業的自媒體行銷團隊宣傳曝光，一直以來，我們協助許多品牌再造轉型，皆端出相當漂亮的成績單。`,
                                photo: 'intro_3.png',
                            }"
                        />
                    </div>
                </div>
            </UiContainer>
        </section>
        <section class="py-20 bg-Primary-100">
            <div class="overflow-hidden">
                <div class="flex justify-center items-center gap-x-14">
                    <div class="flex flex-col items-center justify-center w-[446px]">
                        <h2 class="text-3xl text-Primary-500-Primary font-bold text-center mb-6">
                            為什麼您該選擇群眾募資？
                        </h2>
                        <img src="~assets/images/proposal/demo_idea.png" class="block w-[446px]" />
                    </div>
                    <ul>
                        <ProposalDemoListItem
                            v-for="(item, i) in demoList"
                            :key="i"
                            :dataObj="{ ...item, index: i + 1 }"
                            :class="i !== 0 && i !== demoList.length - 1 ? ' my-16 ml-14' : 'mr-14'"
                        />
                    </ul>
                </div>
            </div>
        </section>
        <section class="py-20">
            <section class="py-14 flex justify-center items-center mb-20 ring-1">
                <div class="w-72 text-left">
                    <h2 class="text-3xl text-Primary-500-Primary font-bold text-left mb-6">
                        歡迎創作者們 <br />
                        您可以開始選擇提案...
                    </h2>
                    <UiButton>我要提案</UiButton>
                </div>
                <div
                    v-for="(type, t) in proposalTypes"
                    :key="t"
                    class="p-12 w-[306px] h-[290px] ml-14 rounded-[48px] bg-white relative overflow-hidden shadow-card"
                >
                    <UIcon
                        :name="type.icon"
                        class="text-Primary-50 text-8xl font-black absolute top-[-16px] right-[-12px] scale-110"
                    ></UIcon>
                    <h3 class="text-2xl font-bold text-Primary-500-Primary mb-6">{{ type.title }}</h3>
                    <ul>
                        <li v-for="(item, i) in type.lists" :key="i" class="flex items-center mb-4">
                            <UIcon name="i-heroicons-light-bulb" class="text-Primary-500-Primary text-base"></UIcon>
                            <span class="text-Primary-500-Primary text-base">{{ " " + item }}</span>
                        </li>
                    </ul>
                </div>
            </section>
            <section class="w-[966px] ring-1 mx-auto">
                <h2 class="text-3xl text-Primary-500-Primary font-bold text-center mb-10">募資提案常見問題</h2>
                <div class="bg-white rounded-3xl px-[60px] py-5">
                    <UiHorizontalNav
                        :nav-items="navItems"
                        :activeNavItemId="activeNavItemId"
                        @updateNavItemId="updateNavItemId"
                    />
                    <section>
                        <UiAccordion :items="navItemContents.find((el) => el.id === activeNavItemId).datas" />
                    </section>
                </div>
            </section>
        </section>
    </section>
</template>

<script setup>
import { navItemIds, navItemContents } from "/_nuxt/assets/others/proposal/data";

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

const circleBg = `
    background-image: radial-gradient(
            rgba(204, 138, 251, 0.6) 0%,
            rgba(204, 138, 251, 0.6) 20%,

            rgba(204, 138, 251, 0.5) 20%,
            rgba(204, 138, 251, 0.5) 30%,

            rgba(204, 138, 251, 0.4) 30%,
            rgba(204, 138, 251, 0.4) 40%,

            rgba(204, 138, 251, 0.3) 40%,
            rgba(204, 138, 251, 0.3) 50%,

            rgba(204, 138, 251, 0.2) 50%,
            rgba(204, 138, 251, 0.2) 60%,

            rgba(204, 138, 251, 0.1) 60%,
            rgba(204, 138, 251, 0.1) 70%,

            rgba(204, 138, 251, 0.05) 70%,
            rgba(204, 138, 251, 0.05) 80%,

            rgba(204, 138, 251, 0.025) 80%,
            rgba(204, 138, 251, 0.025) 90%,

            rgba(204, 138, 251, 0.015) 90%,
            rgba(204, 138, 251, 0.015) 100%
        )
    `;
</script>

<style scoped lang="scss">
.x-block {
    position: relative;

    &::before {
        content: "";
        display: block;
        width: 930px;
        height: 930px;
        border-radius: 50%;

        position: absolute;
        top: -200%;
        right: -100%;
        z-index: -1;

        // box-shadow:
        //     0 0 0 10px rgba(204, 138, 251, calc(0.5 - 0.05)),
        //     0 0 0 calc(10px * 2) rgba(204, 138, 251, calc(0.5 - 0.05 * 2)),
        //     0 0 0 calc(10px * 3) rgba(204, 138, 251, calc(0.5 - 0.05 * 3)),
        //     0 0 0 calc(10px * 4) rgba(204, 138, 251, calc(0.5 - 0.05 * 4)),
        //     0 0 0 calc(10px * 5) rgba(204, 138, 251, calc(0.5 - 0.05 * 5)),
        //     0 0 0 calc(10px * 6) rgba(204, 138, 251, calc(0.5 - 0.05 * 6)),
        //     0 0 0 calc(10px * 7) rgba(204, 138, 251, calc(0.5 - 0.05 * 7)),
        //     0 0 0 calc(10px * 8) rgba(204, 138, 251, calc(0.5 - 0.05 * 7)),
        //     0 0 0 calc(10px * 9) rgba(204, 138, 251, calc(0.5 - 0.05 * 7));

        background-image: radial-gradient(
            rgba(204, 138, 251, 0.6) 0%,
            rgba(204, 138, 251, 0.6) 20%,

            rgba(204, 138, 251, 0.5) 20%,
            rgba(204, 138, 251, 0.5) 30%,

            rgba(204, 138, 251, 0.4) 30%,
            rgba(204, 138, 251, 0.4) 40%,

            rgba(204, 138, 251, 0.3) 40%,
            rgba(204, 138, 251, 0.3) 50%,

            rgba(204, 138, 251, 0.2) 50%,
            rgba(204, 138, 251, 0.2) 60%,

            rgba(204, 138, 251, 0.1) 60%,
            rgba(204, 138, 251, 0.1) 70%,

            rgba(204, 138, 251, 0.05) 70%,
            rgba(204, 138, 251, 0.05) 80%,

            rgba(204, 138, 251, 0.025) 80%,
            rgba(204, 138, 251, 0.025) 90%,

            rgba(204, 138, 251, 0.015) 90%,
            rgba(204, 138, 251, 0.015) 100%
        );
    }
}
</style>
