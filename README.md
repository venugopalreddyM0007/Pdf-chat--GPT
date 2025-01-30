# Chat with your PDFs



This app allows you to chat with your PDFs.



The app is built with Next.js. It uses PDF.js to parse the PDF file and preview it, and the NVIDIA Nim API with the `mixtral-8x7b-instruct-v0.1` AI model to chat with the PDF text.

## Author

This project is built by :

https://www.linkedin.com/in/manuru-venu-gopal-reddyfrontenddeveloper/

## Getting Started

First, duplicate the `.env` file into a new file named `.env.local`. Update the value of your [NVIDIA Nim API](https://build.nvidia.com/explore/discover) key and [Clerk](https://clerk.com/docs/upgrade-guides/api-keys) key there.

The first time you are running this project, you will need to install the dependencies. Run this command in your terminal:

```bash
yarn
```

To start the app, run:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.
