<template>
    <div class="fixed top-0 left-0 z-50 md:z-[3] w-screen bg-black/[0.7] h-screen flex items-center justify-center">
        <div
            class="relative w-screen h-screen md:w-[375px] md:h-[79%] md:rounded-[16px] overflow-hidden"
            @mouseover="hoverEffect('in')"
            @mousemove="hoverEffect('in')"
            @mouseleave="hoverEffect('out')"
            @touchstart="hoverEffect('touch')"
        >
            <video
                ref="videoPlayer"
                class="video-js vjs-default-skin"
                controls
                :src="source"
                @pause="onpause"
                @playing="onplaying"
            ></video>

            <transition name="video">
                <div v-show="hover">
                    <UIcon
                        name="i-heroicons-speaker-wave"
                        class="absolute top-5 left-6 text-white w-7 text-3xl cursor-pointer"
                        v-show="!videoStatus.isMute"
                        @click="muteClick(true)"
                    />
                    <UIcon
                        name="i-heroicons-speaker-x-mark"
                        class="absolute top-5 left-6 text-white w-7 text-3xl cursor-pointer"
                        v-show="videoStatus.isMute"
                        @click="muteClick(false)"
                    />

                    <UIcon
                        name="i-heroicons-chevron-right"
                        class="absolute top-1/2 right-6 transform -translate-y-1/2 text-white w-7 text-3xl cursor-pointer"
                        @click="switchVideo(1)"
                    />

                    <UIcon
                        name="i-heroicons-chevron-left"
                        class="absolute top-1/2 left-6 transform -translate-y-1/2 text-white w-7 text-3xl cursor-pointer"
                        @click="switchVideo(-1)"
                    />

                    <img
                        src="~assets/images/icon/close-icon.svg"
                        alt="close"
                        class="absolute top-6 right-6 text-white w-7 cursor-pointer"
                        @click="closeVideo"
                    />

                    <div class="absolute bottom-12 left-1/2 transform -translate-x-1/2">
                        <CardVideoProduct :isFundRaising="true" />
                    </div>

                    <div class="block">
                        <img
                            src="~assets/images/icon/play-video-icon.svg"
                            alt="play video"
                            class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer size-28"
                            v-show="videoStatus.isPause"
                            @click="playVideo($event, 'play')"
                        />

                        <UIcon
                            name="i-heroicons-pause-circle"
                            class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer size-28 rounded-full text-white/[0.85]"
                            v-show="!videoStatus.isPause"
                            @click="playVideo($event, 'pause')"
                        />
                    </div>
                </div>
            </transition>
        </div>
    </div>
</template>

<script setup>
import videojs from "video.js";
import "~/assets/css/video.css";

const { videoPlayList, videoIndex, modelValue } = defineProps({
    videoPlayList: {
        type: Array,
        default: () => [],
    },
    videoIndex: {
        type: Number,
        default: 0,
    },
});

const emit = defineEmits(["closeVideo"]);

const hover = ref(false);
let hoverEffectTimer = null;

const videoPlayer = ref(null);
const myPlayer = ref();
const videoStatus = ref({
    isMute: false,
    isPause: false,
});

const options = reactive({
    autoplay: true,
    fluid: false, // 是否要滿版或有黑邊
    muted: false,
    preload: "auto",
    language: "zh-TW",
    loop: true,
    notSupportedMessage: "影片格式不支援",
    playsinline: true,
});

const playList = videoPlayList;

const startIndex = ref(videoIndex);
const source = ref(playList[startIndex.value].source);

function switchVideo(index) {
    startIndex.value += index;

    const lastVideo = playList.length - 1;

    if (startIndex.value > lastVideo) {
        startIndex.value = 0;
    }

    if (startIndex.value < 0) {
        startIndex.value = lastVideo;
    }

    source.value = playList[startIndex.value].source;
}

function muteClick(status) {
    videoStatus.value.isMute = status;

    myPlayer.value.muted(status);
}

function onpause() {
    videoStatus.value.isPause = true;
}

function onplaying() {
    videoStatus.value.isPause = false;
}

function playVideo(e, status) {
    e.stopPropagation();

    if (status === "play") {
        myPlayer.value.play();
    } else if (status === "pause") {
        myPlayer.value.pause();
    }
}

function closeVideo() {
    emit("closeVideo");
}

function hoverEffect(type) {
    clearTimeout(hoverEffectTimer);

    if (type === "in") {
        hover.value = true;
    }

    if (type === "touch") {
        hover.value = !hover.value;
    }

    hoverEffectTimer = setTimeout(() => {
        hover.value = false;
    }, 2500);
}

onMounted(() => {
    myPlayer.value = videojs(videoPlayer.value, options);

    myPlayer.value.play();

    document.body.style.overflow = "hidden";
});

onBeforeUnmount(() => {
    document.body.style.overflow = "auto";
});
</script>

<style scoped>
.video-js,
.videoContainer {
    width: 100%;
    height: 100%;
}

.video-js video {
    object-fit: fill;
}
</style>
