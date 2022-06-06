module.exports = [
  {
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '1234',
    database: 'payment',
    entities: ['src/**/*.entity.ts'],
    autoLoadEntities: true,
    seeds: ['src/**/*.seed.ts'],
    factories: ['src/**/*.factory.ts'],
  },
];
