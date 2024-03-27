<template>
    <span ref="span"></span>
</template>

<script setup>
const span = ref(null);

const props  = defineProps({
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

watch(() => props.endNumber, (newVal) => {
    if (newVal > 0) {
        numberConutUp(props.startNumber, newVal);
    }
});

onMounted(() => {
        numberConutUp(props.startNumber, props.endNumber);
});
</script>
<style scoped></style>
