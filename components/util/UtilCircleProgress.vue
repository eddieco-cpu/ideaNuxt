<template>
    <div class="o-progress-circle o-progress-circle--rounded">
        <div class="o-progress-circle__fill">
            <svg class="icon" viewBox="0 0 40 40">
                <circle r="15.9154943092" cy="20" cx="20" />
                <circle
                    ref="circle"
                    r="15.9154943092"
                    cy="20"
                    cx="20"
                    stroke-dashoffset="100"
                    transform="rotate(-90,20,20)"
                />
            </svg>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    progress: {
        type: Number,
        default: 0,
    },
});
const circle = ref();

watch(
    () => props.progress,
    (progress) => {
        if (!!circle.value) {
            circle.value.style.strokeDashoffset = 100 - progress;
        }
    },
    { immediate: true },
);
</script>

<style scoped>
.o-progress-circle {
    display: inline-block;
    position: relative;
    width: 200px;
    height: 200px;
}
.o-progress-circle__fill circle {
    fill: none;
    stroke-width: 2.5px;
    stroke: #e5defa;
}
.o-progress-circle__fill circle:nth-child(2) {
    animation: load-circle 1s;
    stroke: #6b56ca;
    stroke-dasharray: 100;
}

.o-progress-circle--rounded circle:nth-child(2) {
    stroke-linecap: round;
}

@-moz-keyframes load-circle {
    0% {
        stroke-dashoffset: 100;
    }
}
@-webkit-keyframes load-circle {
    0% {
        stroke-dashoffset: 100;
    }
}
@-o-keyframes load-circle {
    0% {
        stroke-dashoffset: 100;
    }
}
@keyframes load-circle {
    0% {
        stroke-dashoffset: 100;
    }
}
</style>
