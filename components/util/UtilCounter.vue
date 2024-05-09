<template>
    <span ref="span"></span>
</template>

<script setup>
const span = ref(null);

const { endNumber, startNumber } = defineProps({
    endNumber: {
        type: Number,
        default: 0,
    },
    startNumber: {
        type: Number,
        default: 0,
    },
});

function numberConutUp(num, maxNumber) {
    var numText = num;
    var timer;
    function numSlideFun() {
        numText += 2; // 速度

        if (numText >= maxNumber) {
            numText = maxNumber;

            cancelAnimationFrame(timer);
        } else {
            timer = requestAnimationFrame(numSlideFun);
        }

        if (span.value) {
            span.value.innerHTML = numText;
        }
    }

    numSlideFun();
}

onMounted(() => {
    numberConutUp(startNumber, endNumber);
});
</script>
<style scoped></style>
