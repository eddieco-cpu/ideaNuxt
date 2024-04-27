<template>
    <div>
        <p
            class="text-xs text-Neutral-500-Primary pointer-events-none text-right h-7 leading-7 mb-5 mt-[calc(-44px)] max-lg:mt-0 max-lg:mb-3 max-lg:h-auto max-lg:leading-4 max-lg:text-left"
            v-if="pageStatus === 'edit'"
        >
            {{ "最後更新於" + pageTime }}
        </p>
        <section class="bg-white rounded-lg mb-5">
            <DashboardProductFullContext ref="fullContext" />
        </section>
        <UiButton v-if="pageStatus !== 'reviewed'" class="max-w-[90px] !text-sm" @click="doSave" > 資料儲存 </UiButton>
    </div>
</template>
<script setup>
import { useToast } from "vue-toastification";
const toast       = useToast();
const route       = useRoute();
const dashboardId = route.params.dashboardId;
const pageStatus  = ref("edit"); // edit, reviewed
const pageTime    = ref("2023/10/27 11:16");
const fullContext = ref();

async function getHtmlContext() {
    const data = await POST("/getOneProjectNew", {'project_id' : dashboardId }, '');
    if (!!data) {
        if (data.data) fullContext.value.editorContent = data.data.content;
<<<<<<< HEAD
=======

        console.log(data.data)
        if(data.data.review_status == 0 || data.data.review_status == 3) {
            pageStatus.value = 'reviewed';
        }
>>>>>>> 1cdb0af (0427)
    }
}
onMounted(() => {
    getHtmlContext();
});

async function doSave() {
<<<<<<< HEAD
    const payload = {'content': fullContext.value.editorContent,'project_id': dashboardId};

    const data = await POST("/updateProject", payload, '');
=======
    
    const payload = {'content': fullContext.value.editorContent,'project_id': dashboardId};

    const data = await POST("/updateProjectContent", payload, '');
>>>>>>> 1cdb0af (0427)
    if(!!data) {
        toast.success(data.message)
    }
}
</script>

