import { post } from "../utils/request"


export function loginApi(user) {
    return post("/auth/login", user);
}