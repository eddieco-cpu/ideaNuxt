//
const fakeDatas = [
    {
        id: "fakeDataOfDetailsFaq1",
        qus: helperLorem(5, 20),
        ans: helperLorem(50, 100),
    },
    {
        id: "fakeDataOfDetailsFaq2",
        qus: helperLorem(5, 20),
        ans: helperLorem(50, 100),
    },
    {
        id: "fakeDataOfDetailsFaq3",
        qus: helperLorem(5, 20),
        ans: helperLorem(50, 100),
    },
    {
        id: "fakeDataOfDetailsFaq4",
        qus: helperLorem(5, 20),
        ans: helperLorem(50, 100),
    },
    {
        id: "fakeDataOfDetailsFaq5",
        qus: helperLorem(5, 20),
        ans: helperLorem(50, 100),
    },
    {
        id: "fakeDataOfDetailsFaq6",
        qus: helperLorem(5, 20),
        ans: helperLorem(50, 100),
    },
    {
        id: "fakeDataOfDetailsFaq7",
        qus: helperLorem(5, 20),
        ans: helperLorem(50, 100),
    },
    {
        id: "fakeDataOfDetailsFaq8",
        qus: helperLorem(5, 20),
        ans: helperLorem(50, 100),
    },
    {
        id: "fakeDataOfDetailsFaq9",
        qus: helperLorem(5, 20),
        ans: helperLorem(50, 100),
    },
    {
        id: "fakeDataOfDetailsFaq10",
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
