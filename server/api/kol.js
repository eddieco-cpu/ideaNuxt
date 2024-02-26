export default defineEventHandler((event) => {
    return [
        { id: 1, index: 1, isFavorite: true, name: "劉德華", image: helperPicture() },
        { id: 2, index: 2, isFavorite: true, name: "大福同學", image: helperPicture() },
        { id: 4, index: 4, isFavorite: false, name: "郭富城", image: helperPicture() },
        { id: 3, index: 3, isFavorite: true, name: "張學友", image: helperPicture() },
        { id: 7, index: 7, isFavorite: true, name: "張惠妹", image: helperPicture() },
        { id: 5, index: 5, isFavorite: true, name: "石原さとみ", image: helperPicture() },
        { id: 6, index: 6, isFavorite: false, name: "蔡依林", image: helperPicture() },
        { id: 10, index: 10, isFavorite: false, name: "伊藤健太郎", image: helperPicture() },
        { id: 8, index: 8, isFavorite: false, name: "松山ケンイチ", image: helperPicture() },
        { id: 9, index: 9, isFavorite: true, name: "美村里江", image: helperPicture() },
    ];
});
