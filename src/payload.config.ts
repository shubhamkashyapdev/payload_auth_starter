import { buildConfig } from 'payload/config';
import path from 'path';
// import Examples from './collections/Examples';
import Users from './collections/Users';
import { Investor } from './collections/Investor';
import { Startup } from './collections/Startup';
import { Settings } from './collections/Settings';
const sendEmilPath = path.resolve(__dirname, 'collections/hooks/SendEmail.ts');
const mockEmailModulePath = path.resolve(__dirname, 'mocks/sendEmail.ts');
export default buildConfig({
  serverURL: 'http://localhost:3000',
  admin: {
    user: Users.slug,
    webpack: (config) => ({
      ...config,
      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve.alias,
          [sendEmilPath]: mockEmailModulePath,
        }
      }
    })
  },
  collections: [
    Users,
    Investor,
    Startup,
    Settings,
  ],
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, 'generated-schema.graphql'),
  },
});
