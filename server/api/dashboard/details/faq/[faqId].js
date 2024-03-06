//
const fakeDatas = [
    {
        id: "aaa",
        qus: helperLorem(5, 20),
        ans: helperLorem(50, 100),
    },
    {
        id: "bbb",
        qus: helperLorem(5, 20),
        ans: helperLorem(50, 100),
    },
    {
        id: "ccc",
        qus: helperLorem(5, 20),
        ans: helperLorem(50, 100),
    },
];

//
export default defineEventHandler((event) => {
    const faqId = getRouterParam(event, "faqId");

    return {
        faqId,
        faqData: fakeDatas.find((el) => el.id === faqId)
            ? { ...fakeDatas.find((el) => el.id === faqId), time: new Date() }
            : null,
    };
});
