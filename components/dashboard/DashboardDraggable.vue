<template>
    <div>
        <h1>Dashboard Draggable</h1>
        <draggable v-model="items" handle=".handle" item-key="id" @end="dragEnd" @start="dragStart">
            <template #item="{ element: item, index }">
                <div class="item border-[1px] m-1 p-1 mb-2" :class="[item.bg, { dragging: draggingIndex === index }]">
                    <div class="handle inline-block p-1 mb-1 ring-1">Sort</div>
                    <div class="title">{{ item.title }}</div>
                </div>
            </template>
        </draggable>
    </div>
</template>

<script setup>
let items = ref([
    {
        id: "a",
        title: "Item 1",
        bg: "bg-red-100",
    },
    {
        id: "b",
        title: "Item 2",
        bg: "bg-green-100",
    },
    {
        id: "c",
        title: "Item 3",
        bg: "bg-blue-100",
    },
]);

let draggingIndex = ref(-1); // -1 表示没有元素正在被拖拽

//
function dragStart(event) {
    draggingIndex.value = event.oldIndex;
}

function dragEnd() {
    draggingIndex.value = -1; // 重置
    console.log("拖放操作完成", items.value);
}
</script>

<style scoped>
.dragging {
    /* opacity: 0.5;
    background-color: #f0f0f0; */
    border: 1px dashed #777;
}
</style>
