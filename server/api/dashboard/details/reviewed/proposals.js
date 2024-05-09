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
    const proposals = Array.from({ length: 6 }, (item, i) => {
        const originalPrice = helperRandomNumber(10000, 13000);
        const specialOffer = helperRandomNumber(8000, 10000);
        const photo = helperPicture();
        return {
            //
            id: i + 1, //generateUniqueId(),
            projectName: helperLorem(15, 30),
            projectPreview: photo,
            image: photo,

            //
            originalPrice,
            specialOffer,
            price: specialOffer,

            //
            salesLimit: true,
            salesLimitedQuantity: helperRandomNumber(30, 80),

            //
            sponsors: helperRandomNumber(0, 10),

            //
            content: generateRandomArray(1, 3),

            //
            deliveryTime: formatDate(randomDate(new Date(2024, 3, 30), new Date(2025, 6, 30))),

            //
            deliveOverseas: {
                isAvailable: true,
                fee: helperRandomNumber(0, 100),
            },
            deliveToStore: {
                isAvailable: true,
                fee: 0,
            },
            deliveToHouse: {
                isAvailable: true,
                fee: helperRandomNumber(0, 100),
            },

            //
            soldOut: false,
        };
    });
    proposals[proposals.length - 1].soldOut = true;
    return { proposals };
});
