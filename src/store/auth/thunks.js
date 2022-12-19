import { loginWithEmailPassword, registerUserWithEmailPassword, signInWithGoogle } from "../../firebase/providers";
import { checkingCredentials, login, logout } from "./authSlice"


export const checkingAuthentication = ( email, password ) => {

    return async ( dispatch ) => {

       dispatch( checkingCredentials() );

    }
}


export const startGoogleSingIn = () => {

    return async ( dispatch ) => {

        dispatch( checkingCredentials() );
        const result = await signInWithGoogle();
        if ( !result.ok ) return dispatch( logout( result.errorMessage ) );

        dispatch( login( result ) );

     }

}

export const startCreatingUserWithEmailPassword = ({ email, password, displayName }) => {

    return async( dispatch ) => {
        dispatch( checkingCredentials() );
        const { ok, uid, photoURL } = await registerUserWithEmailPassword({ email, password, displayName });
        if ( !ok ) return dispatch( logout({ errorMessage }) );
        dispatch( login({ uid, displayName, email, photoURL }));
    }
}

export const startLoginWithEmailPassword = ({ email, password }) => {
    return async( dispatch ) => {
        dispatch( checkingCredentials() );
        const result = await loginWithEmailPassword({ email, password });
        console.log(result);
        
        if ( !result.ok ) return dispatch( logout( resutl.errorMessage ) );
        dispatch( login( result ) );
    }
}