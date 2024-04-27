import { useToast } from "vue-toastification";

const toast = useToast();

export default function (status, message) {
<<<<<<< HEAD
  switch (status) {
    case 400:
    case 401:
      toast.error("請登入會員");
      //navigateTo("/");
      break;
    case 422:
      toast.error(message);
      break;
    default:
      break;
  }
=======
    switch (status) {
        case 400:
        case 401:
            if(message) {
                toast.error(message);
            }else {
                toast.error('請登入會員');
            }
            navigateTo("/");
            break;
        case 422:
            toast.error(message);
            break;
        default:
            break;
    }
>>>>>>> 1cdb0af (0427)
}
