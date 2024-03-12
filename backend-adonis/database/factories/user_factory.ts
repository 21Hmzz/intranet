import User from "#models/user";
import Factory from "@adonisjs/lucid/factories";

export const UserFactory = Factory.define(User, ({ faker }) => {
  return {
    fullName: faker.person.fullName(),
    username: faker.internet.userName(),
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    email: faker.internet.email(),
    password: faker.internet.password()
  };
}).build();
