<template>
    <div class="s-container ring-1" ref="sContainer" @mousedown="doMouseDown($event)">
        <div
            class="s-inner block rounded-lg overflow-hidden"
            ref="sInner"
            :style="'outline: 2px solid orange;'"
            @mousemove="doMouseMove($event)"
        >
            <!-- <div class="w-[1300px] bg-blue-500 h-96">1</div> -->
            <draggable
                v-model="xProposals"
                handle=".handle"
                item-key="id"
                @end="dragEnd"
                @start="dragStart"
                v-if="xProposals.length > 0"
            >
                <template #item="{ element: proposl, index }">
                    <div class="flex justify-start items-start gap-x-1" :class="{ dragging: draggingIndex === index }">
                        <!--  -->
                        <section class="p-3 ring-1">
                            <div class="min-h-20 w-[925px] flex justify-start items-stretch gap-x-2">
                                <!--  -->
                                <div>
                                    <div
                                        class="handle cursor-grab flex-shrink-0 h-8 flex justify-center items-center group"
                                    >
                                        <UIcon
                                            name="i-heroicons-bars-3"
                                            class="block w-5 h-5 text-Neutral-500-Primary text-Primary-500-Primary group-hover:text-Primary-400-Hover group-active:text-Primary-200"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <div
                                        class="flex-shrink-0 h-8 flex justify-center items-center group cursor-pointer"
                                    >
                                        <UIcon
                                            name="i-heroicons-pencil-square"
                                            class="block w-5 h-5 text-Neutral-500-Primary text-Primary-500-Primary group-hover:text-Primary-400-Hover group-active:text-Primary-200"
                                        />
                                    </div>
                                </div>

                                <!--  -->
                                <div class="w-[125px] flex-shrink-0">
                                    <picture class="block w-[125px] aspect-[125/50] overflow-hidden rounded">
                                        <img :src="proposl.photo" alt="" class="block w-full h-full object-cover" />
                                    </picture>
                                </div>

                                <!--  -->
                                <div class="w-[208px] flex-shrink-0">
                                    <article>
                                        <h3 class="line-clamp-3 text-sm font-medium mb-1" :title="proposl.name">
                                            {{ proposl.name }}
                                        </h3>
                                        <p class="pb-1 flex justify-start items-center gap-x-1">
                                            <b class="text-Status-Color-Danger-500-Primary text-sm font-medium"
                                                >NT$ {{ proposl.specialOffer }}</b
                                            >
                                            <b
                                                class="text-Status-Color-Danger-400-Hover text-xs font-normal line-through"
                                                >定價 ${{ proposl.originalPrice }}</b
                                            >
                                        </p>
                                    </article>
                                </div>
                                <b class="block w-[1px] border-l-[1px] border-[#ccc]"></b>

                                <!--  -->
                                <div class="w-[158px] flex-shrink-0">
                                    <ul class="list-disc pl-8 text-xs text-Neutral-800">
                                        <li v-for="content in proposl.contentList" class="mb-1">
                                            {{ content }}
                                        </li>
                                    </ul>
                                </div>
                                <b class="block w-[1px] border-l-[1px] border-[#ccc]"></b>

                                <!--  -->
                                <div class="w-[158px] flex-shrink-0">
                                    <ul class="list-disc pl-8 text-xs text-Neutral-800">
                                        <li v-for="content in proposl.sizeList" class="mb-1">
                                            {{ content }}
                                        </li>
                                    </ul>
                                </div>
                                <b class="block w-[1px] border-l-[1px] border-[#ccc]"></b>

                                <!--  -->
                                <div class="w-[158px] flex-shrink-0">
                                    <ul class="text-xs text-Neutral-800">
                                        <li class="mb-1 flex justify-start items-center gap-x-1">
                                            <UIcon name="i-heroicons-shopping-bag" class="block w-4 h-4" />
                                            預計{{ proposl.deliveryTime }}出貨
                                        </li>
                                        <li
                                            v-if="proposl.isDeliveryFree"
                                            class="mb-1 flex justify-start items-center gap-x-1"
                                        >
                                            <UIcon name="i-heroicons-shopping-cart" class="block w-4 h-4" />
                                            台灣本島免運費
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </section>
                    </div>
                </template>
            </draggable>
        </div>
    </div>
</template>
<script setup>
//
const props = defineProps({
    proposals: Array,
});

//
const xProposals = ref([]);
onMounted(() => {
    xProposals.value = props.proposals;
    console.log(xProposals.value);
});

//
let draggingIndex = ref(-1); // -1 表示没有元素正在被拖拽

function dragStart(event) {
    console.log("dragStart", event);
    draggingIndex.value = event.oldIndex;
}

function dragEnd() {
    console.log("dragEnd");
    draggingIndex.value = -1; // 重置
    console.log("拖放操作完成", proposals.value);
}

//
const sContainer = ref();
const sInner = ref();

const isdraggin = ref(false);
let startx = ref(0);
let x = ref(0);

//
onMounted(() => {
    window.addEventListener("mouseup", doMouseUp);
});
onUnmounted(() => {
    window.removeEventListener("mouseup", doMouseUp);
});

function doMouseDown(event) {
    // isdraggin.value = true;
    // startx.value = e.clientX - sInner.value.offsetLeft;
    // x.value = sInner.value.offsetLeft;
    // sContainer.value.addEventListener("mousemove", doMouseMove);
    // sContainer.value.addEventListener("mouseup", doMouseUp);

    // 目前滑鼠觸發事件時距離 slider x 軸的 px
    console.log(event.offsetX);

    // 目前 sliderInner 距離它父層元素（也就是 slider）的 x 軸距離
    console.log(sInner.value.offsetParent);
    console.log(sInner.value.offsetLeft);
    startx.value = event.offsetX - sInner.value.offsetLeft;
    console.log(startx.value);
    sContainer.value.style.cursor = "grabbing";

    // 開啟開關（代表現在是在抓的狀態）
    isdraggin.value = true;
}

function doMouseUp() {
    isdraggin.value = false;
    sContainer.value.style.cursor = "";
}

function doMouseMove(event) {
    //
    console.log(!isdraggin.value);
    if (!isdraggin.value) return;

    event.preventDefault();
    x.value = event.offsetX;

    console.log(`目前x${x.value}`);
    console.log(`目前starx${startx.value}`);
    console.log(`${x.value - startx.value}`);
    sInner.value.style.left = `${x.value - startx.value}px`;

    checkBoundary();
}

function checkBoundary() {
    const outer = sContainer.value.getBoundingClientRect();
    const inner = sInner.value.getBoundingClientRect();
    console.log(outer);
    console.log(inner);
    // if (inner.left > 0) {
    //   console.log('Hi!');
    // }
    if (parseInt(sInner.value.style.left) > 0) {
        console.log("左邊到底了");
        sInner.value.style.left = "0px";
    } else if (inner.right < outer.right) {
        console.log("右邊到底了");
        sInner.value.style.left = `-${inner.width - outer.width}px`;
    }
}

//
</script>
<style>
.s-container {
    position: relative;
    height: 1500px;
    /* overflow: hidden; */
}
.s-inner {
    position: absolute;
    top: 0;
    left: 0;
}
</style>
