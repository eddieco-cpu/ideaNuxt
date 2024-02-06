<template>
	<!-- <Header /> -->
	<component :is="showHeader"></component>

	<!-- 主要內容 -->
	<main :class="containerClass">
		<slot />
	</main>

	<!-- 頁腳 -->
	<TheFooter />
</template>

<script setup>
import { useBaseStore } from '@/stores/base';
import { HeaderMobile, HeaderWeb } from "#components";
const showHeader = shallowRef(null);
const containerClass = ref("web-container");

function checkWindowWidth() {
	if (window.innerWidth < 576) {
		showHeader.value = HeaderMobile;
		containerClass.value = "mobile-container";
	} else {
		showHeader.value = HeaderWeb;
		containerClass.value = "web-container";
	}
}

const baseStore = useBaseStore();
const { getPageUrl } = baseStore;

useHead({
	meta: [
		{ name: 'og:url', content: getPageUrl() }
	],
	link: [
		{ rel: 'canonical', href: getPageUrl() }
	],
});

onMounted(() => {
	checkWindowWidth();

	window.addEventListener("resize", () => {
		checkWindowWidth();
	});
});
</script>

<style scoped>
.mobile-container {
	padding-top: 52px;
}

.web-container {
	padding-top: 74px;
}
</style>
