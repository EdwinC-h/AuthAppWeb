import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, sendEmailVerification } from 'firebase/auth';
import { auth } from '../firebaseClient';

export const registrar = async (email, password) => {
  const credencial = await createUserWithEmailAndPassword(auth, email, password);
  await sendEmailVerification(credencial.user);
  return credencial;
};

export const login = (email, password) => signInWithEmailAndPassword(auth, email, password);
export const logout = () => signOut(auth);
export const escucharSesion = (callback) => onAuthStateChanged(auth, callback);
export const obtenerToken = async () => {
  if (!auth.currentUser) return null;
  return await auth.currentUser.getIdToken();
};