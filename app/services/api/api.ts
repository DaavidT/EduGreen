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
    const userID = Crypto.randomUUID()
    const db = dbFirestore
    const date = new Date()
    const fecha_creacion = date.getDate() + "-" + date.getMonth() + 1 + "-" + date.getFullYear()

    await setDoc(doc(db, "users", userID), {
      nombre: name,
      apellido: lastName,
      edad: age,
      correo: email,
      cometntarios: comments,
      fecha_creacion: fecha_creacion,
    })
  }
}

// Singleton instance of the API for convenience
export const api = new Api()
