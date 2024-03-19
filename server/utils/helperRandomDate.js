//
function formatDate(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    return `${year}-${month}-${day} ${hours}:${minutes}`;
}

//
export default function (
    format,
    startDate = new Date(),
    endDate = new Date(new Date().setFullYear(new Date().getFullYear() + 1)),
) {
    const start = new Date(startDate).getTime();
    const end = new Date(endDate).getTime();
    if (start > end) {
        console.error("Start date must be before end date");
        return;
    }
    const randomTime = Math.random() * (end - start) + start;
    const randomDate = new Date(randomTime);

    // 根據指定的格式格式化日期
    switch (format) {
        case "yyyy-mm-dd hh:mm":
            return formatDate(randomDate);
        case "yyyy/mm/dd":
            return `${randomDate.getFullYear()}/${String(randomDate.getMonth() + 1).padStart(2, "0")}/${String(randomDate.getDate()).padStart(2, "0")}`;
        default:
            console.error("Unsupported format");
            return;
    }
}
