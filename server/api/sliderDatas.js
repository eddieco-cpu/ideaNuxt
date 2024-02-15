export default defineEventHandler(() => {
    const sliderDatas = Array.from({ length: 10 }, () => ({
        photo: helperPicture(),
        provider: helperLorem(3, 10),
        title: helperLorem(10, 20),
    }));
    return { sliderDatas };
});
