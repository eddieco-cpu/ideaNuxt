<template>
	<header class="px-1.5 fixed top-0 w-full z-50">
		<div class="py-4 px-2.5 flex justify-between">
			<div class="w-16" @click="hideSideNav = !hideSideNav">
				<img src="~assets/images/header/menu.svg" alt="menu" />
			</div>

			<div class="logo">
				<img src="~assets/images/header/logo.png" alt="logo" width="160" />
			</div>

			<div class="search-area">
				<div class="search flex">
					<img
						src="~assets/images/header/search-purple.svg"
						class="mr-5"
						alt="search"
					/>
					<img
						src="~assets/images/header/shoppingCart.svg"
						alt="shoppingCart"
					/>
				</div>
			</div>
		</div>
	</header>

	<!-- 側邊選單 -->
	<div>
		<Transition name="mask">
			<div
				class="absolute left-0 top-0 h-full w-full bg-black bg-opacity-50 transition duration-1000 z-50"
				@click="hideSideNav = true"
				v-if="!hideSideNav"
			></div>
		</Transition>

		<div
			class="w-64 absolute left-0 top-0 h-full bg-white overflow-x-auto transition duration-500 transform z-50"
			:class="{ '-translate-x-full': hideSideNav }"
		>
			<div
				class="auth py-4 px-7 flex justify-between items-center bg-Primary-500-Primary"
			>
				<UButton
					color="white"
					variant="ghost"
					class="rounded-lg bg-Primary-500-Primary hover:bg-opacity-30 border border-Primary-200 hover:border-Primary-500-Primary transition duration-500 text-white px-3 py-1.5 text-sm flex items-center justify-center"
				>
					<template #leading>
						<img src="~assets/images/header/user.svg" />
					</template>
					<span class="font-normal"> 登入 /註冊 </span>
				</UButton>

				<UButton
					color="white"
					variant="ghost"
					class="text-white underline hover:bg-opacity-0"
				>
					<span class="font-normal"> 登出 </span>
				</UButton>

				<img
					src="~assets/images/header/arrow-left.svg"
					alt="arrow-left"
					@click="hideSideNav = true"
				/>
			</div>

			<UAccordion
				:items="items"
				color="black"
				size="xl"
				open-icon="i-heroicons-plus"
				close-icon="i-heroicons-minus"
				class="text-Primary-600-Dark-Primary px-7"
			>
				<template #category="{ item }">
					<ul class="text-left bg-Primary-50 py-3 px-5 text-Neutral-900">
						<li
							v-for="(list, index) in item.lists"
							:key="index"
							class="mb-5 last:mb-0"
						>
							<p>{{ list }}</p>
						</li>
					</ul>
				</template>

				<template #proposal="{ item }">
					<ul class="text-left bg-Primary-50 py-3 px-5 text-Neutral-900">
						<li
							v-for="(list, index) in item.lists"
							:key="index"
							class="mb-5 last:mb-0"
						>
							<p>{{ list }}</p>
						</li>
					</ul>
				</template>

				<template #default="{ item, open }">
					<UButton
						color="white"
						variant="ghost"
						:ui="{ rounded: 'rounded-none' }"
						class="text-Primary-600-Dark-Primary disabled:opacity-100 text-base justify-between p-0 pt-6"
					>
						<span class="truncate">{{ item.label }}</span>

						<template #trailing>
							<div v-show="item.showOpenIcon">
								<UIcon
									v-if="open"
									name="i-heroicons-minus"
									class="w-5 h-5 ms-auto transform transition-transform duration-200 flex"
								/>
								<UIcon
									v-else
									name=" i-heroicons-plus"
									class="w-5 h-5 ms-auto transform transition-transform duration-200 flex"
								/>
							</div>
						</template>
					</UButton>
				</template>
			</UAccordion>
		</div>
	</div>
</template>

<script setup>
const items = [
	{
		label: "分類",
		slot: "category",
		showOpenIcon: true,
		lists: [
			"科技AI",
			"時尚流行",
			"書籍出版",
			"設計藝術",
			"遊戲動漫",
			"保健食品",
			"課程教育",
			"攝影圖像",
			"表演/門票",
			"服務/公益",
		],
	},
	{
		label: "群眾集資",
		showOpenIcon: false,
		disabled: true,
	},
	{
		label: "好評團購",
		showOpenIcon: false,
		disabled: true,
	},
	{
		label: "團主推薦",
		showOpenIcon: false,
		disabled: true,
	},
	{
		label: "好物分享",
		showOpenIcon: false,
		disabled: true,
	},
	{
		label: "關於我們",
		slot: "proposal",
		showOpenIcon: true,
		lists: ["關於我們", "聯絡我們", "隱私權政策"],
	},
	{
		label: "提案",
		disabled: true,
		showOpenIcon: false,
	},
];

const hideSideNav = ref(true);
</script>

<style scoped>
.mask-enter-active,
.mask-leave-active {
	transition: opacity 0.5s ease;
}

.mask-enter-from,
.mask-leave-to {
	opacity: 0;
}
</style>
