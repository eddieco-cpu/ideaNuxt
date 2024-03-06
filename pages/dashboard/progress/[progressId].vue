<template>
    <div>
        <UiTitle class="w-full">新增進度更新</UiTitle>
        <section class="min-h-32 rounded-lg border-[1px] border-[#E5E5E5] bg-white mb-3">
            <UFormGroup label="標題" required class="mb-9">
                <div class="relative">
                    <UTextarea
                        placeholder="請輸入簡潔明瞭的標題"
                        :rows="1"
                        resize
                        class="w-full"
                        size="lg"
                        v-model="title"
                    />
                    <p class="text-sm text-right text-Neutral-500-Primary absolute bottom-[-20px] right-0">
                        <span>{{ title.length }}</span> / <span>{{ titleMaxLength }}</span>
                    </p>
                </div>
            </UFormGroup>

            <UFormGroup label="更新內容" required class="mb-6">
                <DashboardProgressFullContext />
            </UFormGroup>
        </section>
    </div>
</template>
<script setup>
const title = ref("");
const titleMaxLength = 40;
</script>
