function generateUniqueId() {
    //
    const uniquePart = Date.now().toString(36);
    const randomPart = Math.random().toString(36).substring(2, 15);

    return uniquePart + randomPart;
}

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
    let prods = Array.from({ length: 4 }, () => ({
        id: generateUniqueId(),

        projectName: helperLorem(5, 20),

        originalPrice: helperRandomNumber(5000, 9000),
        specialOffer: helperRandomNumber(500, 4999),

        salesLimit: true,
        salesLimitedQuantity: helperRandomNumber(10, 100),

        sponsors: helperRandomNumber(0, 10),

        content: generateRandomArray(1, 3),
        specification: generateRandomArray(1, 3),

        imgData: helperPicture(),

        soldOut: false,
    }));

    prods[2].soldOut = true;
    prods[3].soldOut = true;

    return {
        prods,
    };
});
