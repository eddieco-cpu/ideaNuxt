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
    const faqs = Array.from({ length: 10 }, () => ({
        id: generateUniqueId(),
        label: helperLorem(5, 20),
        content: generateRandomArray(1, 5),
    }));
    return { faqs };
});
