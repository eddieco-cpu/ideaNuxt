<template>
    <div class="group p-2.5 border border-gray-300 rounded-md m-2.5 cursor-pointer hover:bg-gray-100 transition-colors duration-350 ease-in-out">
        <picture class="block max-w-[360px] aspect-[4/3] overflow-hidden">
            <img
                :src="helperPicture()"
                class="block w-full h-full group-hover:scale-110 object-cover transition-transform duration-350 ease-in-out"
            />
        </picture>
        <span class="group/item p-2 inline-block border-solid border-2 border-Primary-600-Dark-Primary m-2">
            card
            <a href="#" class="group-hover/item:text-blue-400">external link</a>
        </span>
        <p class="text-Primary-500-Primary">{{ helperLorem(30, 40) }}</p>
    </div>
</template>
<script setup></script>
