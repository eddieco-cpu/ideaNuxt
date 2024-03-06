<template>
    <div>
        <ClientOnly>
            <QuillEditor
                v-model:content="editorContent"
                ref="myQuillEditor"
                :options="editorOptions"
                @textChange="onEditorChange"
                contentType="html"
            />
        </ClientOnly>
    </div>
</template>
<script setup>
import { QuillEditor } from "@vueup/vue-quill";
import "@vueup/vue-quill/dist/vue-quill.snow.css";

//
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

        // 启用历史模块，配置撤销和重做的深度
        history: {
            delay: 2000,
            userOnly: false,
            maxStack: 500, // 可调整为需要的撤销/重做步数
        },
    },
};

//
watch(
    editorContent,
    (val) => {
        console.log("editorContent", val);
    },
    { deep: true },
);

function onEditorChange(quill) {
    console.log("editor change!");
    console.log("quill", quill);
    // console.log("text", quill.getText());
    // console.log("delta", quill.getContents());
}

//
</script>
<style scoped lang="css">
:deep(.ql-editor) {
    min-height: 200px;
}
:deep(.ql-toolbar.ql-snow) {
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
}
:deep(.ql-container.ql-snow) {
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
}
</style>
