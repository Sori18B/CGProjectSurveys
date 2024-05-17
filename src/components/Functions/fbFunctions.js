import { db } from './firebaseConfig'; 
import { addDoc, collection, updateDoc, arrayUnion } from "firebase/firestore";

// Tu código para crear y enviar respuestas aquí
export const createFormulario = async (titulo, descripcion, usuarioID, preguntas) => {
  try {
    const docRef = await addDoc(collection(db, 'formularios'), {
      titulo: titulo,
      descripcion: descripcion,
      usuarioID: usuarioID,
      preguntas: preguntas // Array de objetos con 'pregunta' y 'tipoPregunta'
    });

    // Actualizar el usuario con el ID del nuevo formulario
    await updateDoc(doc(db, 'usuarios', usuarioID), {
      formularioIDs: arrayUnion(docRef.id)
    });

    console.log('Formulario creado con ID: ', docRef.id);
  } catch (error) {
    console.error('Error creando formulario: ', error);
  }
};

export const submitRespuestas = async (usuarioID, respuestas) => {
  try {
    await addDoc(collection(db, 'respuestas'), {
      usuarioID: usuarioID,
      respuestas: respuestas
    });
    console.log('Respuestas enviadas correctamente');
  } catch (error) {
    console.error('Error enviando respuestas: ', error);
    throw error;
  }
};

export const submitRespuestasCues = async (usuarioID, respuestas) => {
  try {
    await addDoc(collection(db, 'respuestasCues'), {
      usuarioID: usuarioID,
      respuestas: respuestas
    });
    console.log('Respuestas del cuestionario enviadas correctamente');
  } catch (error) {
    console.error('Error al enviar respuestas del cuestionario:', error);
    throw error;
  }
};

