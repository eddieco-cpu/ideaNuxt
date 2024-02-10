<template>
    <!--  -->
    <UCarousel v-slot="{ item, index }" :items="xItems" :ui="{ item: 'snap-start' }">
        <div class="text-center mx-1">
            <img :src="item.avatar.src" :alt="item.name" class="rounded-full w-48 h-48 mb-2" draggable="false" />

            <p class="font-semibold">{{ index + 1 }}. {{ item.name }}</p>
        </div>
    </UCarousel>

    <!--  -->
    <UCarousel v-slot="{ item }" :items="items">
        <img :src="item" width="300" height="400" draggable="false" />
    </UCarousel>
</template>
<script setup>
const xItems = [
    {
        name: "Sébastien Chopin",
        to: "https://github.com/Atinux",
        avatar: { src: "https://ipx.nuxt.com/f_auto,s_192x192/gh_avatar/atinux" },
    },
    {
        name: "Pooya Parsa",
        to: "https://github.com/pi0",
        avatar: { src: "https://ipx.nuxt.com/f_auto,s_192x192/gh_avatar/pi0" },
    },
    {
        name: "Daniel Roe",
        to: "https://github.com/danielroe",
        avatar: { src: "https://ipx.nuxt.com/f_auto,s_192x192/gh_avatar/danielroe" },
    },
    {
        name: "Anthony Fu",
        to: "https://github.com/antfu",
        avatar: { src: "https://ipx.nuxt.com/f_auto,s_192x192/gh_avatar/antfu" },
    },
    {
        name: "AAAAAAA",
        to: "https://github.com/Atinux",
        avatar: { src: "https://ipx.nuxt.com/f_auto,s_192x192/gh_avatar/atinux" },
    },
    {
        name: "BBBBBBBB",
        to: "https://github.com/pi0",
        avatar: { src: "https://ipx.nuxt.com/f_auto,s_192x192/gh_avatar/pi0" },
    },
    {
        name: "CCCCCCCC",
        to: "https://github.com/danielroe",
        avatar: { src: "https://ipx.nuxt.com/f_auto,s_192x192/gh_avatar/danielroe" },
    },
    {
        name: "DDDDDDD",
        to: "https://github.com/antfu",
        avatar: { src: "https://ipx.nuxt.com/f_auto,s_192x192/gh_avatar/antfu" },
    },
];

const items = [
    "https://picsum.photos/600/800?random=1",
    "https://picsum.photos/600/800?random=2",
    "https://picsum.photos/600/800?random=3",
    "https://picsum.photos/600/800?random=4",
    "https://picsum.photos/600/800?random=5",
    "https://picsum.photos/600/800?random=6",
];
</script>
