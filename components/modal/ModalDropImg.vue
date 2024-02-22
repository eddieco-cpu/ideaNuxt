<script setup>
import { useDropzone } from "vue3-dropzone";
//import axios from "axios";

const maxFilesLength = 5;
const maxFileSize = 500; // KB

const clg = () => console.log(state.files);

const state = reactive({
    files: [],
});

const { getRootProps, getInputProps, isDragActive, ...rest } = useDropzone({
    onDrop,
});

function onDrop(acceptedFiles, rejectReasons) {
    console.log("onDrop");
    console.log(acceptedFiles);
    console.log(rejectReasons);

    // 计算还可以添加的图片数量
    const remainingSlots = maxFilesLength - state.files.length;

    //
    if (remainingSlots <= 0) {
        return alert("Cannot upload more images. Limit reached.");
    }

    if (acceptedFiles.find((file) => !file.type.startsWith("image/"))) {
        return alert("Only images are allowed.");
    }

    if (acceptedFiles.find((file) => file.size / 1024 > maxFileSize)) {
        return alert(`File size should be less than ${maxFileSize}KB.`);
    }

    //
    const filesToProcess = acceptedFiles
        .filter((file) => file.type.startsWith("image/") && file.size / 1024 <= maxFileSize)
        .slice(0, remainingSlots); // 确保不超过剩余的空位数量

    //
    const filesWithPreviewAndInfo = filesToProcess.map((file) => {
        const reader = new FileReader();

        return new Promise((resolve, reject) => {
            reader.onload = (e) => {
                const img = new Image();
                img.onload = () => {
                    resolve({
                        ...file,
                        preview: e.target.result,
                        sizeKB: (file.size / 1024).toFixed(2),
                        dimensions: `${img.width}x${img.height}`,
                    });
                };
                img.src = e.target.result;
            };
            reader.onerror = reject;
            reader.readAsDataURL(file);
        });
    });

    //
    Promise.all(filesWithPreviewAndInfo)
        .then((files) => {
            state.files.push(...files); // 添加到现有文件列表中
        })
        .catch((error) => console.error("Error processing files:", error));
}

function handleClickDeleteFile(index) {
    state.files.splice(index, 1);
}

const uploadImages = async () => {
    const url = "后端接口URL"; //
    const formData = new FormData();

    state.files.forEach((file, index) => {
        formData.append(`file${index}`, file);
    });

    /** 
    try {
        const response = await axios.post(url, formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        });
        console.log("Upload successful:", response.data);
        // 这里可以添加成功上传后的逻辑，例如清空已上传的文件列表等
    } catch (error) {
        console.error("Upload failed:", error);
    }
    */
};
</script>

<template>
    <!-- <div>
        <button @click="clg">click to check</button>
    </div> -->
    <div class="w-[calc(100%+4px)] ml-[-2px]">
        <div class="inline-flex justify-start items-center flex-row-reverse flex-wrap gap-2">
            <!-- 上传区域 -->
            <div
                v-if="state.files.length < maxFilesLength"
                class="w-[104px] h-[104px] rounded-md overflow-hidden flex justify-center items-center flex-col gap-2 cursor-pointer border-2 border-dotted"
                :class="`${isDragActive ? ' border-gray-500 bg-gray-300' : 'border-gray-300 bg-gray-50'}`"
                v-bind="getRootProps()"
            >
                <input v-bind="getInputProps()" />
                <p class="text-sm">＋</p>
                <p class="text-base text-gray-500">{{ isDragActive ? "Drop Here" : "Upload" }}</p>
            </div>

            <!-- 图片显示区 -->
            <template v-if="state.files.length > 0">
                <div
                    class="w-[104px] h-[104px] rounded-md relative p-2 ring-1 ring-Neutral-400-Hover"
                    v-for="(file, index) in state.files"
                    :key="index"
                >
                    <b
                        class="absolute top-[-8px] right-[-4px] block w-4 h-4 text-xs cursor-pointer text-white bg-gray-500 rounded-full text-center leading-4 hover:bg-gray-700 active:bg-gray-300"
                        @click="handleClickDeleteFile(index)"
                        >×</b
                    >
                    <picture class="block w-full h-full overflow-hidden">
                        <img :src="file.preview" class="block w-full h-full object-cover" alt="file preview" />
                    </picture>
                    <!-- <div>
                    <b>{{ file.path }}</b>
                    <b>{{ file.sizeKB }} KB</b>
                    <b>{{ file.dimensions }}</b>
                </div> -->
                </div>
            </template>
        </div>
    </div>
    <!-- <div>
        <button @click="uploadImages">Upload Images</button>
    </div> -->
</template>
