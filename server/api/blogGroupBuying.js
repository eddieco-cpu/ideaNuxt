export default defineEventHandler((event) => {
    let fakeNames = [
        "James",
        "Mary",
        "Robert",
        "Patricia",
        "John",
        "Jennifer",
        "Michael",
        "Linda",
        "David",
        "Elizabeth",
        "William",
        "Barbara",
        "Richard",
        "Susan",
        "Joseph",
        "Jessica",
        "Thomas",
        "Sarah",
        "Christopher",
        "Karen",
        "Charles",
        "Lisa",
        "Daniel",
        "Nancy",
        "Matthew",
        "Betty",
        "Anthony",
        "Sandra",
        "Mark",
        "Margaret",
        "Donald",
        "Ashley",
        "Steven",
        "Kimberly",
        "Andrew",
        "Emily",
        "Paul",
        "Donna",
        "Joshua",
        "Michelle",
    ];

    return Array.from({ length: 2 }, (item, i) => ({
        id: i,
        image: helperPicture(),
        avatar: helperPicture(),
        isFavorite: Math.floor(Math.random() * i) % 2 === 0,
        name: fakeNames[i],
        text: helperLorem(50, 80),
        price: [Math.floor(Math.random() * 2000) + 2000, Math.floor(Math.random() * 6000) + 6000],
        tags: [
            { name: "促銷", color: "danger ", type: "text" },
            { name: "免運", color: "success", type: "text" },
            { name: "19日", color: "primary", type: "time" },
        ],
    }));
});
