<template>
     <div class="loader-wrap" :class="isLoading ? 'loader-visible' : 'loader-hidden'">
      <div class="loader">
        <svg viewBox="0 0 86 80">
          <polygon points="43 8 79 72 7 72" />
        </svg>
      </div>
    </div>
  </template>

<script setup>
const isLoading = ref(false)

function show() {
	if (process.client) {
	  isLoading.value = true
	}
}

function hide() {
	if (process.client) {
	  isLoading.value = false
	}
}

defineExpose({
  show,
  hide
});
</script>
  
  <style scoped>
  .loader-wrap.loader-visible {
  visibility: visible;
  opacity: 1;
  scale: 1.5;
}

.loader-wrap.loader-hidden {
  visibility: hidden;
  opacity: 0;
  scale: 1;
}
  .loader-wrap {
    position: fixed;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0;
    left: 0;
    z-index: 999999;
    background-color: rgb(0 0 0 / 0.35);
    /* backdrop-filter: blur(4px); */
    transition-property: background-color, visibility, opacity, scale;
    transition-duration: .2s;
  }
  
  .loader {
    --path: #2f3545;
    --dot: #00bd6f;
    --duration: 1.5s;
    width: 48px;
    height: 44px;
    position: relative;
  }
  
  .loader:before {
    content: '';
    width: 6px;
    height: 6px;
    border-radius: 50%;
    position: absolute;
    display: block;
    background: var(--dot);
    top: 37px;
    left: 21px;
    transform: translate(-10px, -18px);
    animation: dotTriangle var(--duration) cubic-bezier(0.785, 0.135, 0.15, 0.86) infinite;
  }
  
  .loader svg {
    display: block;
    width: 100%;
    height: 100%;
  }
  
  .loader svg polygon {
    fill: none;
    stroke: var(--path);
    stroke-width: 10px;
    stroke-linejoin: round;
    stroke-linecap: round;
    stroke-dasharray: 145 76 145 76;
    stroke-dashoffset: 0;
    animation: pathTriangle var(--duration) cubic-bezier(0.785, 0.135, 0.15, 0.86) infinite;
  }
  
  @keyframes pathTriangle {
    33% {
      stroke-dashoffset: 74;
    }
  
    66% {
      stroke-dashoffset: 147;
    }
  
    100% {
      stroke-dashoffset: 221;
    }
  }
  
  @keyframes dotTriangle {
    33% {
      transform: translate(0, 0);
    }
  
    66% {
      transform: translate(10px, -18px);
    }
  
    100% {
      transform: translate(-10px, -18px);
    }
  }
  </style>