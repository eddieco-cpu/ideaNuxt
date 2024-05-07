<template>
    <div>
        <p
            class="text-xs text-Neutral-500-Primary pointer-events-none text-right h-7 leading-7 mb-5 mt-[calc(-44px)] max-lg:mt-0 max-lg:mb-3 max-lg:h-auto max-lg:leading-4 max-lg:text-left"
            v-if="pageStatus === 'edit'"
        >
            {{ "最後更新於" + pageTime }}
        </p>
        <section class="bg-white rounded-lg mb-5">
            <DashboardProductFullContext ref="fullContext" />
        </section>
        <UiButton class="max-w-[90px] !text-sm" @click="doSave"> 資料儲存 </UiButton>
    </div>
</template>
<script setup>
//
const pageStatus = ref("edit"); // edit, reviewed
const pageTime = ref("2023/10/27 11:16");

const fullContext = ref();

async function getHtmlContext() {
    let data = await GET(`/api/dashboard/details/product/fakeHtml`);
    if (!!data) {
        console.log("data.data", data.data);
        data.data = cleanUpString(data.data);
        console.log("data.data", data.data);
        if (data.data) fullContext.value.editorContent = data.data;
    }
}
onMounted(() => {
    getHtmlContext();
});

function cleanUpString(str) {
    // 移除換行符或回車符
    str = str.replace(/[\r\n]+/gm, "");
    // 壓縮標籤之間的多個空白為一個空白，並移除標籤周圍的空白
    str = str.replace(/>\s+</gm, "><").replace(/\s{2,}/g, " ");
    return str;
}

function doSave() {
    console.log("doSubmit");
    console.log("fullContext", fullContext.value.editorContent);
    fullContext.value.quillEditorBody.setHTML("");
}
</script>
