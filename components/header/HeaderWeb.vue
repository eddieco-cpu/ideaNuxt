<template>
	<header
		class="py-4 fixed top-0 w-full z-50 border border-b-neutral-100 shadow"
	>
		<div
			class="px-12 flex gap-8 items-center justify-between max-w-7xl mx-auto"
		>
			<!-- logo -->
			<div class="logo">
				<img src="~assets/images/header/logo.png" alt="logo" width="213" />
			</div>

			<!-- 導覽列 -->
			<ul class="flex gap-10 text-Primary-600-Dark-Primary font-medium text-sm">
				<li><span>群眾集資</span></li>
				<li><span>好評團購</span></li>
				<li><span>團主推薦</span></li>
				<li><span>好物分享</span></li>
			</ul>

			<!-- 搜尋欄 -->
			<div class="search flex">
				<UButtonGroup size="lg" orientation="horizontal">
					<UInput
						variant="none"
						placeholder="找點子、找團購"
						class="border border-Neutral-100 bg-Neutral-100 rounded-l-md mr-1"
						size="lg"
					/>

					<UButton
						color="gray"
						variant="ghost"
						class="bg-Neutral-100 hover:bg-opacity-30 border border-Neutral-100 hover:border-Neutral-100 transition duration-500 text-Primary-400-Hover px-3 py-1.5"
					>
						<template #leading>
							<img src="~assets/images/header/search.svg" />
						</template>
					</UButton>
				</UButtonGroup>
			</div>

			<!-- 購物車 -->
			<div>
				<div class="flex">
					<img src="~assets\images\header\heart.svg" class="mr-5" alt="heart" />
					<img
						src="~assets/images/header/shoppingCart.svg"
						alt="shoppingCart"
					/>
				</div>
			</div>

			<!-- 會員登入 -->
			<UButton
				color="white"
				variant="ghost"
				class="rounded-lg bg-Primary-50 hover:bg-opacity-30 border border-Primary-50 hover:border-Primary-50 transition duration-500 text-Primary-400-Hover px-3 py-1.5 text-sm"
			>
				<template #leading>
					<img
						src="~assets/images/header/user-purple.svg"
						class="text-Primary-400-Hover"
					/>
				</template>
				<span class="font-normal"> 登入 /註冊 </span>
			</UButton>
		</div>
	</header>
</template>

<script setup></script>

<style scoped></style>
