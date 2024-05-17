import { db } from './firebaseConfig'; // Importar la instancia de Firestore desde el archivo de configuración
import { addDoc, collection, updateDoc, arrayUnion } from "firebase/firestore";

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

export const submitRespuestas = async (formularioID, usuarioID, respuestas) => {
  try {
    const docRef = await addDoc(collection(db, 'respuestas'), {
      formularioID: formularioID,
      usuarioID: usuarioID,
      respuestas: respuestas // Array de objetos con 'preguntaID' y 'respuesta'
    });
    console.log('Respuestas enviadas con ID: ', docRef.id);
  } catch (error) {
    console.error('Error enviando respuestas: ', error);
  }
};
