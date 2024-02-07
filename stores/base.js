import { defineStore } from "pinia";

export const useBaseStore = defineStore("base", () => {
    //
    let loading = ref(false);

    function getPageName() {
        const route = useRoute();
        const pageName = route.fullPath.split("?")[0].split("/").reverse()[0];
        return pageName;
    }

    function getPageUrl() {
        const route = useRoute();
        const config = useRuntimeConfig();
        const [host, baseUrl] = [config.public.host, config.public.baseUrl];
        const url = `${host}${baseUrl}${route.fullPath}`;

        return url;
    }

    function removeHtmlTag(str) {
        let reTag = /<[^>]+>|&[^>]+;/g;
        return (str = str.replace(reTag, "").trim());
    }

    function formatDate(date) {
        const day = date.getDate();
        const month = date.getMonth() + 1;
        const year = date.getFullYear();

        return `${year}-${addNumberOfDigit(month.toString())}-${addNumberOfDigit(day.toString())}`;
    }

    function initToday(type = "start") {
        const date = new Date();
        let currentYear = date.getFullYear();
        const currentMonth = date.getMonth() + 1;
        const currentDate = date.getDate();

        if (type === "end") {
            currentYear = currentYear + 1;
        }

        return `${currentYear}-${addNumberOfDigit(currentMonth.toString())}-${addNumberOfDigit(currentDate.toString())}`;
    }

    function isLeapYear(year) {
        if (typeof year !== "number") throw new Error("year must be a number");
        return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
    }

    return {
        loading,
        getPageName,
        getPageUrl,
        removeHtmlTag,
        formatDate,
        initToday,
        isLeapYear,
    };
});
