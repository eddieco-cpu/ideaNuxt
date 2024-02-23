<template>
    <div>
        <UiInputDev name="專案名稱" id="projectName" :isRequired="true" class="mb-3">
            <div>
                <UTextarea
                    :id="'projectName'"
                    placeholder="本次募資專案之名稱/品名，文字數量最多以 40字為限。"
                    :rows="screenWidth <= 768 ? 2 : 1"
                    resize
                    class="w-full"
                    size="lg"
                />
                <p class="text-sm text-right text-Neutral-500-Primary"><span>0</span> / <span>40</span></p>
            </div>
        </UiInputDev>

        <UiInputDev name="專案簡介" id="projectDes" :isRequired="true" class="mb-3">
            <div>
                <UTextarea
                    :id="'projectDes'"
                    placeholder=" 請您簡短的以  90字，快速的介紹本次計畫，將顯示於募資頁商品右側。"
                    :rows="screenWidth <= 768 ? 3 : 2"
                    resize
                    class="w-full"
                    size="lg"
                />
                <p class="text-sm text-right text-Neutral-500-Primary"><span>0</span> / <span>90</span></p>
            </div>
        </UiInputDev>
    </div>
</template>

<script setup>
import VueDatePicker from "@vuepic/vue-datepicker";
import "/public/css/vue-datepicker.css";

const screenWidth = ref(800);

onMounted(() => {
    screenWidth.value = window.innerWidth;
    // window.addEventListener("resize", () => {
    //     screenWidth.value = window.innerWidth;
    // });
});
</script>
