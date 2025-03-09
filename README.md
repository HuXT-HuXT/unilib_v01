Neon Postgress - https://www.youtube.com/watch?v=EZajJGOMWas&t=7031s

- create project on https://console.neon.tech/app/projects
- install drizzle-orm (https://orm.drizzle.team/docs/tutorials/drizzle-with-neon)
- create folder database with files:
  drizzle.ts:

    import config from "@/lib/config";
    import { neon } from "@neondatabase/serverless";
    import { drizzle } from "drizzle-orm/neon-http";

    const sql = neon(config.env.databaseUrl);

    export const db = drizzle({ client: sql });

  schema.ts:

    put here required schemas
  
- create drizzle.config.ts in the root:
  import { config } from 'dotenv';
  import { defineConfig } from "drizzle-kit";

  config({ path: '.env.local' });

  export default defineConfig({
    schema: "./database/schema.ts",
    out: "./migrations",
    dialect: "postgresql",
    dbCredentials: {
      url: process.env.DATABASE_URL!,
    },
  });

- run 2 commands:
  npx drizzle-kit generate
  npx drizzle-kit migrate

- add to package 3 lines:
  "db:generate": "npx drizzle-kit generate",
  "db:migrate": "npx drizzle-kit migrate",
  "db:studio": "npx drizzle-kit studio"

Auth.js - https://www.youtube.com/watch?v=EZajJGOMWas&t=8534s
- install 4 packages:
  npm install next-auth@beta
  npm install bcryptjs
  npx auth secret
  npm i --save-dev @types/bcryptjs

- create file auth.ts it the root
- create file route.ts in app/api/auth/[...nextauth]
- create file middleware.ts in the root
  export { auth as middleware } from "@/auth";
- create folder actions in lib folder and file auth.ts within
- import created functions in lib\actions\auth.ts to app\(auth)\sign-in\page.tsx and app\(auth)\sign-up\page.tsx as onSubmit action.
- switch to components\AuthForm.tsx and toast functionality (optional)
- wrap whole body element in <SessionProvider></SessionProvider> from next-auth/react and add session={session} as argument
  session is part of .\auth.ts



