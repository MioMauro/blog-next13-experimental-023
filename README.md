to be implemented with other features

you are all welcome

---
references: 

https://www.youtube.com/watch?v=JeaHyhcCVCE

https://www.youtube.com/watch?v=1Sqfonk-6Sk

https://www.youtube.com/watch?v=0GgwX0nfAb0

---
npx create-next-app@latest --experimental-app

---
npm install react-icons --save

---
npm install -D tailwindcss postcss autoprefixer

---
npx tailwindcss init -p

---
problem with Material... don't use
npm i @material-tailwind/react  -add to Tailwind.config

---
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({

---
replace with:

npm install formik --save

npm i yup

import { useFormik } from 'formik';

import * as Yup from 'yup'

---
npm install flowbite flowbite-react --save

Require Flowbite as a plugin inside the tailwind.

config.js file:

plugins: [
  require("flowbite/plugin")
  ],

"./node_modules/flowbite-react/**/*.js",

With this plugin we also can omiss className and use only class=""

---
setUp port 3500
npx json-server -p 3500 -w data/db.json

---
npm i react-router-dom

---
npm i react-axios

---
in StaticProps.jsx

import { use } from "react"

---
thanks to: https://rickandmortyapi.com/

---
npm i swr

SWR is a React Hooks library for data fetching

https://www.npmjs.com/package/swr

---
npm i framer-motion
import { motion } from "framer-motion"

export const MyComponent = ({ isVisible }) => (
    <motion.div animate={{ opacity: isVisible ? 1 : 0 }} />)

---