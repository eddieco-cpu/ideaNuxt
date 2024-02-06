<template>
    <div class="p-2.5 border border-gray-300 rounded-md m-2.5 cursor-pointer">
        <picture class="block max-w-[360px] aspect-video overflow-hidden">
            <img :src="helperPicture()"
                class="block w-full h-full object-cover transition-transform duration-350 ease-in-out">
        </picture>
        <p>card</p>
        <p>{{ helperLorem(30, 40) }}</p>
    </div>
</template>
<script setup>
</script>
