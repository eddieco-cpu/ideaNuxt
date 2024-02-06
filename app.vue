<template>
	<TheHeader />
	<main class="p-5 pt-20 min-h-80vh">
		<NuxtPage />
	</main>
	<TheFooter />
</template>
  
<script setup>
import { useBaseStore } from '@/stores/base';

//
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
	document.oncontextmenu = function () {
		return false;
	};
});

</script>

  