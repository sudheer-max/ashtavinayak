import { takeLatest, call, all, put } from "@redux-saga/core/effects";
import userTypes from "./user.types";
import { auth, getCurrentUser, handleUserProfile, googleProvider } from "../../firebase/utils";
import { loginSuccess, logoutSuccess, registerError, resetPasswordSuccess } from "./user.actions";
import { handleResetPasswordFuntion } from "./userHelpers";


export function* getSnapshotFromUserAuth(user, additionalData = {}) {
    try {
        const userRef = yield call(handleUserProfile, { userAuth: user, additionalData });
        const snapshot = yield userRef.get();

        yield put(
            loginSuccess({
                id: snapshot.id,
                ...snapshot.data()
            })
        )

    } catch (err) {
        console.log(err);
    }
}


export function* emailLogin({ payload: { email, password } }) {
    try {
        const { user } = yield auth.signInWithEmailAndPassword(email, password);
        yield getSnapshotFromUserAuth(user);


    } catch (err) {
        console.log(err);
    }
}


export function* onEmailLoginStart() {
    yield takeLatest(userTypes.EMAIL_LOGIN_START, emailLogin);
}


export function* isUserAuthenticated() {
    try {
        const userAuth = yield getCurrentUser();
        if (!userAuth) return;
        yield getSnapshotFromUserAuth(userAuth);
    } catch (err) {
        console.log(err);
    }
}

export function* onUserAuthSession() {
    yield takeLatest(userTypes.USER_AUTH_SESSION, isUserAuthenticated);
}


export function* logoutUser() {
    try {
        yield auth.signOut();

        yield put(
            logoutSuccess()
        )

    } catch (err) {
        console.log(err);
    }
}

export function* onLogoutStart() {
    yield takeLatest(userTypes.LOGOUT_START, logoutUser)
}


export function* registerUser({ payload: {
    displayName, cname, address, mobile, email, password, confirmPassword
} }) {
    if (password !== confirmPassword) {
        const err = ['password does not match'];
        yield put(
            registerError(err)
        )
        return;
    }

    try {
        const { user } = yield auth.createUserWithEmailAndPassword(email, password);
        const additionalData = { displayName, cname, address, mobile };
        yield getSnapshotFromUserAuth(user, additionalData);

    } catch (err) {
        console.log(err);
    }
}

export function* onRegisterUserStart() {
    yield takeLatest(userTypes.REGISTER_USER_START, registerUser);
}


export function* resetPassword({ payload: { email } }) {

    try {
        yield call(handleResetPasswordFuntion, email);
        yield put(
            resetPasswordSuccess()
        )
    } catch (err) {
        // console.log(err);
        yield registerError(err)
    }
}

export function* onResetPasswordStart() {
    yield takeLatest(userTypes.RESET_PASSWORD_START, resetPassword);
}


export function* googleLogin() {

    try {

        const { user } = yield auth.signInWithPopup(googleProvider);
        yield getSnapshotFromUserAuth(user);

    } catch (err) {
        console.log(err);
    }
}


export function* onGoogleLoginStart() {
    yield takeLatest(userTypes.GOOGLE_LOGIN_START, googleLogin);
}

export default function* userSagas() {
    yield all([call(onEmailLoginStart),
    call(onUserAuthSession),
    call(onLogoutStart),
    call(onRegisterUserStart),
    call(onResetPasswordStart),
    call(onGoogleLoginStart)
    ]);
};

