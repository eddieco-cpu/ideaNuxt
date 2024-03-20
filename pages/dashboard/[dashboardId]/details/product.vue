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

function doSave() {
    console.log("doSubmit");
    console.log("fullContext", fullContext.value.editorContent);
    fullContext.value.quillEditorBody.setHTML("");
}
</script>
