# next-app

This is a `Next.js` project bootstrapped with `create-next-app`.

## development

### Requirements
- Node.js >= 18.16.1

### Run

```bash
# run app
npm run dev

# run json-server
npx json-server --port 9999 --watch db.json
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

### Build

```bash
# created in the .next directory
npm run build

# start service
npm run start
```
