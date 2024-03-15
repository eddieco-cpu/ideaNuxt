function generateUniqueId() {
    //
    const uniquePart = Date.now().toString(36);
    const randomPart = Math.random().toString(36).substring(2, 15);

    return uniquePart + randomPart;
}

export default defineEventHandler(() => {
    const orders = Array.from({ length: 55 }, () => ({
        id: "ID" + generateUniqueId(),
        time: helperRandomDate("yyyy-mm-dd hh:mm"),
        name: helperLorem(4, 20),
        amount: "NT$ " + helperRandomNumber(100, 10000),
        payment: "ATM 轉帳付款",
        status: "已成立",
    }));
    return { orders };
});
