import {User} from "../model/User";

export function sumAges(users: User[]) {
    return users.reduce((acc, curr) => acc + curr.age, 0);
}
