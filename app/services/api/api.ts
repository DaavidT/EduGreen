/**
 * This Api class lets you define an API endpoint and methods to request
 * data and process it.
 *
 * See the [Backend API Integration](https://github.com/infinitered/ignite/blob/master/docs/Backend-API-Integration.md)
 * documentation for more details.
 */
import { ApisauceInstance, create } from "apisauce"
import { dbFirestore } from "app/components/hooks/firebaseConfig"
import * as Crypto from "expo-crypto"
import { doc, setDoc } from "firebase/firestore"

import Config from "../../config"
import type { ApiConfig } from "./api.types"

/**
 * Configuring the apisauce instance.
 */
export const DEFAULT_API_CONFIG: ApiConfig = {
  url: Config.API_URL,
  timeout: 10000,
}

/**
 * Manages all requests to the API. You can use this class to build out
 * various requests that you need to call from your backend API.
 */
export class Api {
  apisauce: ApisauceInstance
  config: ApiConfig

  /**
   * Set up our API instance. Keep this lightweight!
   */
  constructor(config: ApiConfig = DEFAULT_API_CONFIG) {
    this.config = config
    this.apisauce = create({
      baseURL: this.config.url,
      timeout: this.config.timeout,
      headers: {
        Accept: "application/json",
      },
    })
  }
  async writeUserData(
    name: string,
    lastName: string,
    email: string,
    age: number,
    comments: string,
  ) {
    try {
      // Genera un ID aleatorio para el usuario
      const userID = Crypto.randomUUID()
      // Referencia a la base de datos
      const db = dbFirestore
      // Obtener fecha actual y la formatea
      const fecha_creacion = this.getActualDate()

      await setDoc(doc(db, "users", userID), {
        nombre: name,
        apellido: lastName,
        edad: age,
        correo: email,
        cometntarios: comments,
        fecha_creacion: fecha_creacion,
      })

      // Se ejecuta si la escritura se completó sin errores
      return { success: true, message: "Los datos se han subido correctamente" }
    } catch (error) {
      // Se ejecuta si ocurre algún error durante la escritura
      return { success: false, message: "Error al subir los datos: " + error.message }
    }
  }

  getActualDate() {
    const date = new Date()
    const day = String(date.getDate()).padStart(2, "0")
    const month = String(date.getMonth() + 1).padStart(2, "0")
    const year = String(date.getFullYear()).slice(-2)
    return day + "-" + month + "-" + year
  }
}

// Singleton instance of the API for convenience
export const api = new Api()
