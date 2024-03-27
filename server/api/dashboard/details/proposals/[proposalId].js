//
const fakeDatas = [
    {
        id: "fakeDataOfDetailsProposal1",
        projectName: helperLorem(5, 20),
        originalPrice: helperRandomNumber(5000, 9000),
        specialOffer: helperRandomNumber(500, 4999),
        salesLimit: true,
        salesLimitedQuantity: helperRandomNumber(10, 100),
        deliveryTime: helperRandomDate("yyyy/mm/dd"),
        content: helperLorem(30, 100),

        imgData: helperPicture(),

        deliveryWays: ["deliveToStore", "deliveToHouse"],
        deliveOverseas: {
            isAvailable: false,
            fee: null,
        },
        deliveToStore: {
            isAvailable: true,
            fee: 10,
            stores: ["711"],
        },
        deliveToHouse: {
            isAvailable: true,
            fee: 0,
        },
    },
    {
        id: "fakeDataOfDetailsProposal2",
        projectName: helperLorem(5, 20),
        originalPrice: helperRandomNumber(5000, 9000),
        specialOffer: helperRandomNumber(500, 4999),
        salesLimit: true,
        salesLimitedQuantity: helperRandomNumber(10, 100),
        deliveryTime: helperRandomDate("yyyy/mm/dd"),
        content: helperLorem(30, 100),

        imgData: helperPicture(),

        deliveryWays: ["deliveOverseas", "deliveToStore", "deliveToHouse"],
        deliveOverseas: {
            isAvailable: true,
            fee: 299,
        },
        deliveToStore: {
            isAvailable: true,
            fee: 10,
            stores: ["family"],
        },
        deliveToHouse: {
            isAvailable: true,
            fee: 0,
        },
    },
    {
        id: "fakeDataOfDetailsProposal3",
        projectName: helperLorem(5, 20),
        originalPrice: helperRandomNumber(5000, 9000),
        specialOffer: helperRandomNumber(500, 4999),
        salesLimit: true,
        salesLimitedQuantity: helperRandomNumber(10, 100),
        deliveryTime: helperRandomDate("yyyy/mm/dd"),
        content: helperLorem(30, 100),

        imgData: helperPicture(),

        deliveryWays: ["deliveOverseas", "deliveToStore", "deliveToHouse"],
        deliveOverseas: {
            isAvailable: true,
            fee: 299,
        },
        deliveToStore: {
            isAvailable: true,
            fee: 10,
            stores: ["family", "711"],
        },
        deliveToHouse: {
            isAvailable: true,
            fee: 0,
        },
    },
    {
        id: "fakeDataOfDetailsProposal4",
        projectName: helperLorem(5, 20),
        originalPrice: helperRandomNumber(5000, 9000),
        specialOffer: helperRandomNumber(500, 4999),
        salesLimit: true,
        salesLimitedQuantity: helperRandomNumber(10, 100),
        deliveryTime: helperRandomDate("yyyy/mm/dd"),
        content: helperLorem(30, 100),

        imgData: helperPicture(),

        deliveryWays: ["deliveToHouse"],
        deliveOverseas: {
            isAvailable: false,
            fee: null,
        },
        deliveToStore: {
            isAvailable: false,
            fee: null,
            stores: [],
        },
        deliveToHouse: {
            isAvailable: true,
            fee: 0,
        },
    },
    {
        id: "fakeDataOfDetailsProposal5",
        projectName: helperLorem(5, 20),
        originalPrice: helperRandomNumber(5000, 9000),
        specialOffer: helperRandomNumber(500, 4999),
        salesLimit: true,
        salesLimitedQuantity: helperRandomNumber(10, 100),
        deliveryTime: helperRandomDate("yyyy/mm/dd"),
        content: helperLorem(30, 100),

        imgData: helperPicture(),

        deliveryWays: ["deliveToStore", "deliveToHouse"],
        deliveOverseas: {
            isAvailable: false,
            fee: null,
        },
        deliveToStore: {
            isAvailable: true,
            fee: 10,
            stores: ["family", "711"],
        },
        deliveToHouse: {
            isAvailable: true,
            fee: 0,
        },
    },
    {
        id: "fakeDataOfDetailsProposal6",
        projectName: helperLorem(5, 20),
        originalPrice: helperRandomNumber(5000, 9000),
        specialOffer: helperRandomNumber(500, 4999),
        salesLimit: true,
        salesLimitedQuantity: helperRandomNumber(10, 100),
        deliveryTime: helperRandomDate("yyyy/mm/dd"),
        content: helperLorem(30, 100),

        imgData: helperPicture(),

        deliveryWays: ["deliveToStore", "deliveToHouse"],
        deliveOverseas: {
            isAvailable: false,
            fee: null,
        },
        deliveToStore: {
            isAvailable: true,
            fee: 10,
            stores: ["family", "711"],
        },
        deliveToHouse: {
            isAvailable: true,
            fee: 0,
        },
    },
];

//
export default defineEventHandler((event) => {
    const proposalId = getRouterParam(event, "proposalId");

    return {
        proposalId,
        proposalData: fakeDatas.find((el) => el.id === proposalId)
            ? { ...fakeDatas.find((el) => el.id === proposalId) }
            : null,
        proposalStatus: fakeDatas.find((el) => el.id === proposalId) ? "edit" : "new",
    };
});
