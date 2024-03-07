function formatDate(date) {
    var year = date.getFullYear();
    var month = date.getMonth() + 1; // 月份是从 0 开始的
    var day = date.getDate();

    // 确保月份和日期是两位数
    month = month < 10 ? "0" + month : month;
    day = day < 10 ? "0" + day : day;

    return year + "/" + month + "/" + day;
}

function randomDate(start, end) {
    var startDate = start.getTime();
    var endDate = end.getTime();
    var randomTime = startDate + Math.random() * (endDate - startDate);
    return new Date(randomTime);
}

//
function generateUniqueId() {
    //
    const uniquePart = Date.now().toString(36);
    const randomPart = Math.random().toString(36).substring(2, 15);

    return uniquePart + randomPart;
}

//
function generateRandomArray(minLength, maxLength) {
    //
    const length = Math.floor(Math.random() * (maxLength - minLength + 1)) + minLength;

    const array = [];
    for (let i = 0; i < length; i++) {
        const item = helperLorem(10, 20);
        array.push(item);
    }

    return array;
}

export default defineEventHandler(() => {
    const proposals = Array.from({ length: 10 }, () => ({
        id: generateUniqueId(),
        photo: helperPicture(),
        name: helperLorem(15, 30),
        originalPrice: 15000,
        specialOffer: 10000,
        contentList: generateRandomArray(1, 3),
        sizeList: generateRandomArray(1, 3),
        deliveryTime: formatDate(randomDate(new Date(2024, 3, 30), new Date(2025, 6, 30))),
        isDeliveryFree: true,
    }));
    return { proposals };
});
