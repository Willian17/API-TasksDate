import { createConnection, getConnectionOptions, Connection } from 'typeorm';
import 'mocha/bin/mocha'
export default async (name = 'default'): Promise<Connection> => {
  const defaultOptions = await getConnectionOptions();

  return createConnection(
    Object.assign(defaultOptions, {
      name,
      database:
        process.env.NODE_ENV === 'test'
          ? 'tasksdate_tests'
          : defaultOptions.database,
    }),
  );
};
