<template>
    <div>
        <section class="bg-white rounded-lg mb-5">
            <DashboardProductFullContext ref="fullContext" />
        </section>
        <UiButton class="max-w-[90px] !text-sm" @click="doSave"> 資料儲存 </UiButton>
    </div>
</template>
<script setup>
const fullContext = ref();

function doSave() {
    console.log("doSubmit");
    console.log("fullContext", fullContext.value.editorContent);
    fullContext.value.quillEditorBody.setHTML("");
}
</script>
