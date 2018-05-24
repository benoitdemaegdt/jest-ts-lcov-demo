import {User} from "../src/model/User";
import {sumAges} from "../src/util/user-util";

describe("Application", () => {
    describe("user-util.ts", () => {
        describe("sumAges(users)", () => {
            it("should sum up the ages", function () {
                const users: User[] = [
                    {name: 'User 1', age: 10, gender: 'Male'},
                    {name: 'User 2', age: 20, gender: 'Male'},
                    {name: 'User 3', age: 30, gender: 'Female'},
                    {name: 'User 4', age: 40, gender: 'Female'},
                ];
                expect(sumAges(users)).toEqual(100);
            });
        });
    });
});
