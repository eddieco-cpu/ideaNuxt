<template>
    <section>
        <div class="ql-context-wrapper min-h-[300px] max-md:min-h-[600px]">
            <ClientOnly>
                <QuillEditor
                    class="min-h-[300px] max-md:min-h-[600px] border-[1px] border-[#E5E5E5] rounded-b-lg"
                    v-model:content="editorContent"
                    ref="quillEditorBody"
                    :options="editorOptions"
                    @textChange="onEditorChange"
                    contentType="html"
                />
            </ClientOnly>
        </div>
        <!-- <hr class="my-1" />
        <article class="art ring-1 p-4 min-h-[300px] rounded-lg" v-html="editorContent"></article> -->
    </section>
</template>
<script setup>
import { QuillEditor } from "@vueup/vue-quill";
import "@vueup/vue-quill/dist/vue-quill.snow.css";

//
const quillEditorBody = ref();
const editorContent = ref("");
const editorOptions = {
    placeholder: "進度更新可透過文字或圖片呈現內容",
    theme: "snow",
    modules: {
        toolbar: [
            [{ size: ["small", false, "large", "huge"] }],
            ["bold", "italic", "underline", "strike"],
            [{ list: "ordered" }, { list: "bullet" }],
            [{ indent: "-1" }, { indent: "+1" }, { align: [] }],
            [{ color: [] }, { background: [] }],
            ["link", "image"],
            //["clean"],
        ],

        history: {
            delay: 1000,
            userOnly: false,
            maxStack: 500, // 可调整为需要的撤销/重做步数   // ctrl+z 撤销, ctrl+y 重做
        },
    },
};

// watch(
//     editorContent,
//     (val) => {console.log("editorContent", val)},
//     { deep: true },
// );

function onEditorChange(quill) {
    console.log("editor change!");
    //console.log("quill", quill);
}

// export files to parent component
defineExpose({
    editorContent,
    quillEditorBody,
});
</script>
<style lang="scss">
@import "@/styles/quillContext.scss";

:deep(.ql-toolbar.ql-snow) {
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
}
:deep(.ql-container.ql-snow) {
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
}
</style>
