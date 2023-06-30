import { Instance, SnapshotIn, SnapshotOut, types } from "mobx-state-tree"

import { withSetPropAction } from "./helpers/withSetPropAction"

const LoggedUserInfoModel = types.model({
  name: types.string,
  username: types.string,
  email: types.string,
})

export const AuthenticationModel = types
  .model("Authentication")
  .props({
    token: types.optional(types.string, ""),
    authUser: "",
    authLogged: false,
    loggedUserInfo: types.optional(LoggedUserInfoModel, { name: "", username: "", email: "" }),
  })
  .actions(withSetPropAction)
  .views((store) => ({
    get isAuthenticated() {
      return store.authLogged
    },
    get getAuthUser() {
      return store.authUser
    },
  })) // eslint-disable-line @typescript-eslint/no-unused-vars
  .actions((store) => ({
    setAuthStatusTrue() {
      store.authLogged = true
    },
    setAuthStatusFalse() {
      store.authLogged = false
    },
    setAuthUser(value: string) {
      store.authUser = value.replace(/ /g, "")
    },
    setLoggedUserInfo(value: { name: string; username: string; email: string }) {
      store.loggedUserInfo = value
    },
  })) // eslint-disable-line @typescript-eslint/no-unused-vars

export interface Authentication extends Instance<typeof AuthenticationModel> {}
export interface AuthenticationSnapshotOut extends SnapshotOut<typeof AuthenticationModel> {}
export interface AuthenticationSnapshotIn extends SnapshotIn<typeof AuthenticationModel> {}
export const createAuthenticationDefaultModel = () => types.optional(AuthenticationModel, {})
