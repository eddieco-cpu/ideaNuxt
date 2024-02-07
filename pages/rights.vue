<template>
    <RightsProgress :total="100" :price="60" />
    <div>
        <h1>Rights Page</h1>
        <h2 class="text-3xl font-bold underline text-gray-500">Welcome to the rights page!</h2>
        <p>{{ rights }}</p>
        <p>{{ rightsPageName }}</p>
        <p>{{ rightsPageUrl }}</p>
        <ul>
            <li v-for="card in cards" :key="card">
                <RightsCard />
            </li>
        </ul>
    </div>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { useRightsStore } from "@/stores/rights";

const rightsStore = useRightsStore();
const { getRightsPageName, getRightsPageUrl } = rightsStore; //function 直接解構
const { rights } = storeToRefs(rightsStore); //ref & reactive 透過 storeToRefs

const rightsPageName = getRightsPageName();
const rightsPageUrl = getRightsPageUrl();

const cards = ref(["a", "b", "c", "d", "e", "f", "g"]);
</script>
