// import sharp from 'sharp'
// import { lexicalEditor } from '@payloadcms/richtext-lexical'
// import { postgresAdapter } from '@payloadcms/db-postgres'
// import { buildConfig } from 'payload'
// import { UsersCollection } from './collections/user'

// export default buildConfig({
//   // If you'd like to use Rich Text, pass your editor here
//   editor: lexicalEditor(),

//   // Define and configure your collections in this array
//   collections: [UsersCollection],

//   // Your Payload secret - should be a complex and secure string, unguessable
//   secret: process.env.PAYLOAD_SECRET || '',
//   // Whichever Database Adapter you're using should go here
//   // Mongoose is shown as an example, but you can also use Postgres
//   db: postgresAdapter({
//     pool: {
//       connectionString: process.env.DATABASE_URI
//     }
//   }),
//   // If you want to resize images, crop, set focal point, etc.
//   // make sure to install it and pass it to the config.
//   // This is optional - if you don't need to do these things,
//   // you don't need it!
//   sharp
// })

// storage-adapter-import-placeholder
import { postgresAdapter } from '@payloadcms/db-postgres' // database-adapter-import
import { payloadCloudPlugin } from '@payloadcms/payload-cloud'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'

import { UsersCollection } from './collections/Users'
import { MediaCollection } from './collections/Media'
import { MoviesCollection } from './collections/Movie'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: UsersCollection.slug,
    importMap: {
      baseDir: path.resolve(dirname)
    }
  },
  collections: [UsersCollection, MediaCollection, MoviesCollection],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts')
  },
  // database-adapter-config-start
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI
    }
  }),
  // database-adapter-config-end
  sharp,
  plugins: [
    payloadCloudPlugin()
    // storage-adapter-placeholder
  ]
})
