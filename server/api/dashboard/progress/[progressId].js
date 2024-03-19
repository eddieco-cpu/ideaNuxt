//
const fakeDataOfProgress = {
    title: "我的標題",
    html: "<p>進度更新內容</p><p>進度更新內容</p><p>進度更新內容</p><p>進度更新內容</p>",
    date: "2023/10/27 11:16",
};

//
export default defineEventHandler((event) => {
    const progressId = getRouterParam(event, "progressId");

    if (progressId !== "fakeDataOfProgress") {
        return {
            progressId,
            progressData: {},
            progressStatus: "new",
        };
    } else {
        return {
            progressId,
            progressData: { ...fakeDataOfProgress },
            progressStatus: "edit",
        };
    }
});
