export default defineEventHandler(() => {
    const subSlider = Array.from({ length: 2 }, () => ({
        photo: helperPicture(),
        provider: "Vicky爸爸",
        title: helperLorem(20, 50),
        tag: "生活",
        date: "2024/04/01",
    }));

    const sliderDatas = Array.from({ length: 5 }, () => ({
        photo: helperPicture(),
        provider: "Vicky媽媽",
        title: helperLorem(20, 50),
        tag: "家電",
        date: "2024/04/03",
        subSlider,
    }));

    return { sliderDatas };
});
