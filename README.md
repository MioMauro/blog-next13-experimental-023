

You-Tube https://www.youtube.com/watch?v=TkFIm2d9tec
---
time: :00
---
npx create-next-app@latest --experimental-app
---
npm install react-icons --save
---
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
---
---
problem with Material... don't use
npm i @material-tailwind/react  -add to Tailwind.config

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

Require Flowbite as a plugin inside the tailwind.config.js
 file:

 plugins: [
    require("flowbite/plugin")
  ],

    "./node_modules/flowbite-react/**/*.js",

With this plugin we also can omiss className and use only class=""
---
