export default defineEventHandler((event) => {
    return [
        {
            id: 1,
            image: helperPicture(),
            avatar: helperPicture(),
            isFavorite: true,
            name: "小雯媽咪",
            text: helperLorem(),
        },
        {
            id: 2,
            image: helperPicture(),
            avatar: helperPicture(),
            isFavorite: false,
            name: "Donna C. Newman",
            text: helperLorem(),
        },
        {
            id: 3,
            image: helperPicture(),
            avatar: helperPicture(),
            isFavorite: false,
            name: "Yong D. Ashley",
            text: helperLorem(),
        },
        {
            id: 4,
            image: helperPicture(),
            avatar: helperPicture(),
            isFavorite: true,
            name: "毛利 禎子",
            text: helperLorem(),
        },
        {
            id: 5,
            image: helperPicture(),
            avatar: helperPicture(),
            isFavorite: true,
            name: "矢吹 葵",
            text: helperLorem(),
        },
        {
            id: 6,
            image: helperPicture(),
            avatar: helperPicture(),
            isFavorite: false,
            name: "柿島 拓海",
            text: helperLorem(),
        },
    ];
});
