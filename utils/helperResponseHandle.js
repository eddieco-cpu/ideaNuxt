import { useToast } from "vue-toastification";

const toast = useToast();

export default function (status, message) {
    switch (status) {
        case 400:
        case 401:
            toast.error(message);
            break;
        case 422:
            toast.error(message);
            break;
        default:
            break;
    }
}
