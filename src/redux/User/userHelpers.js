import { toast } from "react-toastify";
import { auth } from "../../firebase/utils";

toast.configure();

export const handleResetPasswordFuntion = (email) => {

    const config = {
        url: 'https://ashtavinayak.netlify.app/login'
    };

    return new Promise((resolve, reject) => {
        auth.sendPasswordResetEmail(email, config)
            .then(() => {
                resolve();
                toast.success('Reset Password link send on your registerd email address');
            })
            .catch(() => {
                const err = ['Email not found please try again!']
                reject(err);
                toast.error('Please enter your registerd email address!');
            });
    })
}