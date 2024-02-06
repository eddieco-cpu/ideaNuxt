<template>

    <NuxtLayout name="error">
  
      <div class="error">
  
        <div class="wrapper-l">
  
          <div class="error__text-content">
  
            <p class="error__status-code">{{ error.statusCode }}</p>
  
            <p class="error__message">
              <span>很抱歉，</span>
              <span>頁面無法使用或被移除</span>
            </p>
          
          </div>
          
        </div>
  
      </div>
  
    </NuxtLayout>
  
  </template>
  
  <script setup>
  
  const props = defineProps({
    error: { type: Object, required: true}
  });
  
  const handleError = () => clearError({ redirect: '/' });
  
  console.log(`error message: ${props.error.message}`);
  
  
  </script>