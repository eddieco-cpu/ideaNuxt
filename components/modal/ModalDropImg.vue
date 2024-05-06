<script setup>
import { useDropzone } from "vue3-dropzone";
//import axios from "axios";
const props = defineProps({
    max: {
        type: Number,
        default: 5,
    },
    files: {
        type: Array,
        default: () => [
            // {
            //     path: "螢幕擷取畫面 2023-03-06 114529.png",
            //     preview:
            //         "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFUAAAA9CAYAAADcUiVtAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAUeSURBVHhe7ZtLKH1bHMd/7hUSpVAGkncG8ih5FHnknVLCkJhQEjOM3AFhICnKDAMmGJhggCTySHkmAwakEJLkFfG/39/d+3SOnH0256zj7qxPrdZeZ6+1197f/Vvrd/b6tVy8vLzeSeJQ/lJyiQORogpAiioAKaoANEWNioqi/Px8pSQWZ/b1kYWFBWpqalJKRAMDA5y+i6aoxcXF1NzcrJTE4sy+RGOY4Q9LgjUbgU//p+IBCgoKlJIl09PT1NXVpZT+q5uenk6enp50eXlJU1NTNDg4qJwl8vf3p+rqakpISOBjleHhYa6nty9cF30cHBzQ2tqaRR9fAS+msbGR84eHBxobG6PKykqLvtShf3Z2RpmZmVxvZ2eHuru7+Rlt8bebm9s/yrGJ6+tr2tvbI1dXVwoMDKTOzk5aWlrihAe6urrieqogs7OzNDExQW9vb1RaWkr39/e0v7/Pderr67nO4eEhbW5uco6ENriO3r5GRkbIxcWFX0xeXh6Vl5dTeHg4XVxcmOrooa2tjYKCgmh0dJTW19cpMTGRAgIC+J6Wl5e5TlFREfn6+tLr6ysNDQ3xPebm5nI73LctXJXcAlgDUmxsLJdnZmY4/wisb3V11fSGUS8kJIRSU1PZAgDKAA/z2VvW2xdQrRNWhjkYIwSWlJGRwb/bAu2QxsfHTdc6PT019f2RhoYG5Yj4hcfExCglbeyaU2E1ycnJ7D3VhJt2d3dXahDNzc1xDpExrOydG9E2OzubXyimg5OTE+WMbYKDgzmHVaqsrKwoR5bAOs25ubnh/vRgt6OCpWLImifMlyoQs7a2lq3j+fmZrQvilpWVKTX0UVVVRb29vdy2sLCQjo6OqKWlhSoqKpQaYvHw8FCObKNLVGuWheHs4+PDQ9Y8fXz7GN59fX08nOAUAKaIz7DWF9phBOCFQVT8/bJmZda4vb3lHHOxSkpKinJkHYzIpKQk2t7eVn7R5lNHpQLHg6GGC4aGhrIQ8fHxPMGr4AHxm7e3N0/kOEY71Xm0trbyFIG2SCUlJeTn58eOyPw6tvrCiIDT2Nra4vJ3wPyZlZXFc+i/z00RERF8/585Kgz1x8dHSktLo5qaGi63t7frcoqaouIm4HHROW4E+cvLi8mZwMPD0+NcTk4OCxEdHc1CoC2A54czQVuk9/d3WlxcpJ6eHj6vYquvr3h4Lc7Pz9l54gXiXufn5ykyMpKOj48tRA0LC+PnwTkIDmeMEacHuZ4qAMN8URkJKaoApKgCkKIKQIoqACmqAKSoAtAUFZ+MvyGc4mg0RZXhlO8hh78ADBNOMRKGCacYCc0FFVU0a+EKLEBjsdh8LsQiMhaj1VAEynBCWJTWCprZ6stI2DWn/kQ4xQjY7aicFU4xErpEtWZZzgynGAnDhFOMhGHCKUZChlMEIL+oBCBFFYAUVQBSVAFIUQUgRRWAFFUAmqLik1GGU76OpqgynPI9DDP8jbRk+Ot2pzgDw4RTHLU7xRkYMpyC66m7U2C9/7cQjF1z6k+EU9AW667f2Z3iLOyyVIiIcApyc7BhwXz1XxVCXVOFGP39/Sy0iq2+sDslLi6O11rVHXiTk5Nf3kzhDHRZqjXLcmY4xRG7U5yFpqViO0xHRweLt7Gxwb/BCUEggHmyrq6Ot8LAsdzd3XFYZXd317TpAOGUp6cnPgbYxADhEAhUrwNs9YU2ejcy/DS/bneKM5DhFAEY5ovKSEhRBSBFFYAUVQBSVAFIUR0O0R+9oSgQtcBGWwAAAABJRU5ErkJggg==",
            //     sizeKB: "1.38",
            //     dimensions: "85x61",
            //     id: generateUniqueId(),
            // },
        ],
    },
});

const maxFilesLength = props.max;
const maxFileSize = 500; // KB

const clg = () => console.log(state.files);

const state = reactive({
    files: [],
});

watch(props.files, (newVal) => {
    console.log("@@@", newVal);

    //
    if (props.files.length > 0) {
        state.files.push(...newVal.map((file) => ({ ...file, id: generateUniqueId() })));
    }
});

const { getRootProps, getInputProps, isDragActive, ...rest } = useDropzone({
    onDrop,
});

function onDrop(acceptedFiles, rejectReasons) {
    // console.log("onDrop");
    // console.log(acceptedFiles);
    // console.log(rejectReasons);

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
                        id: generateUniqueId(),
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

//dragging
let draggingIndex = ref(-1); // -1 表示没有元素正在被拖拽

function dragStart(event) {
    draggingIndex.value = event.oldIndex;
}

function dragEnd() {
    draggingIndex.value = -1; // 重置
    console.log("拖放操作完成", state.files);
}

function generateUniqueId() {
    //
    const timePart = Date.now().toString(36);
    //
    const randomPart = Math.random().toString(36).substring(2);
    //
    return timePart + randomPart;
}

// export files to parent component
defineExpose({
    files: state.files,
});
</script>

<style scoped>
.dragging {
    @apply bg-Primary-50 min-h-[100px];
}
</style>

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
                <template v-if="state.files.length === 1">
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
                <template v-if="state.files.length > 1">
                    <draggable
                        v-model="state.files"
                        handle=".handle"
                        item-key="id"
                        @end="dragEnd"
                        @start="dragStart"
                        class="flex flex-wrap justify-center items-center gap-2"
                    >
                        <template #item="{ element: item, index }">
                            <div
                                class="w-[calc(104px+20px+8px)] h-[104px] rounded-md relative p-2 ring-1 ring-Neutral-400-Hover flex justify-center items-center gap-2"
                                :class="{ dragging: draggingIndex === index }"
                            >
                                <b
                                    class="absolute top-[-8px] right-[-4px] block w-4 h-4 text-xs cursor-pointer text-white bg-gray-500 rounded-full text-center leading-4 hover:bg-gray-700 active:bg-gray-300"
                                    @click="handleClickDeleteFile(index)"
                                    >×</b
                                >
                                <div class="handle cursor-grab flex justify-center items-center group">
                                    <UIcon
                                        name="i-heroicons-bars-3"
                                        class="block w-5 h-5 text-Neutral-500-Primary text-Primary-500-Primary group-hover:text-Primary-400-Hover group-active:text-Primary-200"
                                    />
                                </div>
                                <picture class="block w-full h-full overflow-hidden">
                                    <img
                                        :src="item.preview"
                                        class="block w-full h-full object-cover"
                                        alt="file preview"
                                    />
                                </picture>
                            </div>
                        </template>
                    </draggable>
                </template>
            </template>
        </div>
    </div>
    <!-- <div>
        <button @click="uploadImages">Upload Images</button>
    </div> -->
</template>
