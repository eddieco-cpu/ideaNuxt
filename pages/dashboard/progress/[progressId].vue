<template>
    <div>
        <UiTitle class="w-full">新增進度更新</UiTitle>
        <section class="min-h-32 rounded-lg border-[1px] border-[#E5E5E5] bg-white mb-3 p-6">
            <!--  -->
            <UFormGroup label="標題" required class="mb-9">
                <div class="relative">
                    <UTextarea
                        placeholder="請輸入簡潔明瞭的標題"
                        :rows="1"
                        resize
                        class="w-full"
                        size="lg"
                        v-model="title"
                    />
                    <p class="text-sm text-right text-Neutral-500-Primary absolute bottom-[-20px] right-0">
                        <span>{{ title.length }}</span> / <span>{{ titleMaxLength }}</span>
                    </p>
                </div>
            </UFormGroup>

            <!--  -->
            <UFormGroup label="更新內容" required class="mb-6">
                <DashboardProgressFullContext ref="fullContext" />
            </UFormGroup>

            <div class="flex justify-start items-center gap-x-2">
                <UiButton class="max-w-16 max-h-8 !text-sm" @click="doSubmit">發佈</UiButton>
                <UiButton class="max-w-16 max-h-8 !text-sm" type="secondary">刪除</UiButton>
            </div>
        </section>
    </div>
</template>
<script setup>
const fullContext = ref();

const title = ref("");
const titleMaxLength = 40;

function doSubmit() {
    console.log("doSubmit");
    console.log("title", title.value);
    console.log("fullContext", fullContext.value.editorContent);
    fullContext.value.quillEditorBody.setHTML("");
}
</script>
