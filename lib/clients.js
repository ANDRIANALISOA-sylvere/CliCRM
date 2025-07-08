import { faker } from '@faker-js/faker';
export const mockClients = Array.from({ length: 20 }, () => ({
  id: faker.string.uuid(),
  name: faker.person.fullName(),
  email: faker.internet.email(),
  phone: faker.phone.number({ style: 'international' }),
  createdAt: faker.date.past(),
}));