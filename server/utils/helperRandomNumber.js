export default function (min, max) {
    min = Math.ceil(min); // 確保最小值是整數
    max = Math.floor(max); // 確保最大值是整數
    return Math.floor(Math.random() * (max - min + 1) + min); // 含最大值，含最小值
}
