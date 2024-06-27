<template>
  <PageContainer :text="'會員登入'">
    <UForm :state="state" class="w-full" @submit="onSubmit">
      <UFormGroup name="phone" class="mb-6">
        <UInput v-model="state.phone" placeholder="輸入手機號碼">
          <template #leading>
            <img src="~assets/images/icon/phone-icon.svg" alt="phone-icon" />
          </template>
        </UInput>
      </UFormGroup>

      <UFormGroup name="password" class="mb-6">
        <UInput v-model="state.password" type="password" placeholder="輸入密碼">
          <template #leading>
            <img src="~assets/images/icon/lock-icon.svg" alt="lock-icon" />
          </template>
        </UInput>
      </UFormGroup>
      <div class="mt-6 flex items-center justify-between w-full">
        <NuxtLink to="/register">
          <span class="text-sm text-Primary-600-Dark-Primary underline cursor-pointer">尚未有帳號，點此註冊 </span>
        </NuxtLink>

        <!-- <span class="text-sm text-Primary-600-Dark-Primary underline cursor-pointer" @click="openModal('forgotPassword')">忘記密碼</span> -->
      </div>

      <button type="submit" class="w-full bg-Primary-500-Primary block p-2 rounded-lg text-white mt-3 text-sm">登入</button>
    </UForm>
  </PageContainer>
</template>

<script setup>
import { useAuthStore } from "@/stores/auth";
import { cartStore } from "@/stores/cart";
import { useToast } from "vue-toastification";

import { POST } from "~/utils/helperFetchData.js";
const openModal = inject("openModal");
const toast = useToast();
const store = useAuthStore();
const cart = cartStore();

const state = reactive({
  phone: "",
  password: "",
});

async function onSubmit(event) {
  const { phone, password } = event.data;

  const payload = { account: phone, password: password };

  try {
    const data = await POST("/login", payload);
    if (!!data) {
      toast.success("登入成功");
     
      store.isLogin = true;
      await new Promise((resolve) => {
            store.setToken(data.access_token);
            resolve();
        });
      store.userInfo = data.user;
      cart.checkCartItem();
      const redirectUrl = sessionStorage.getItem("redirectAfterLogin") || "/";
      sessionStorage.removeItem("redirectAfterLogin"); // 清除存儲，以免後續登入受影響
      // 使用 Nuxt 的 navigateTo 函數進行導航
      navigateTo(redirectUrl); // 導向至原本的目標或首頁
      // openModal("close");
    }
  } catch (err) {}
}
</script>

<style scoped lang="scss"></style>
