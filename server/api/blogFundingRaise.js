export default defineEventHandler((event) => {
    return Array.from({ length: 1 }, (item, i) => ({
        id: i + 1,
        image: helperPicture(),
        isFavorite: Math.floor(Math.random() * i) % 2 === 0,
        text: helperLorem(50, 80),
        dataTime: Math.floor(Math.random() * 20) + 1,
        people: Math.floor(Math.random() * 600) + 20,
        achievementRate: Math.floor(Math.random() * 600),
        price: Math.floor(Math.random() * 50000) + 2000,
        tags: [
            { name: "獨家", color: "primary", type: "text" },
            { name: "促銷", color: "danger", type: "text" },
            { name: "免運", color: "success", type: "text" },
        ],
    }));
});
