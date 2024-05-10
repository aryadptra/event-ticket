import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';
import { postcss } from 'tailwindcss';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.jsx',
    ],

    theme: {
        container: {
            center: true,
            padding: {
                DEFAULT: "1rem",
                lg: "50px",
                xl: "100px",
            },
        },
        extend: {
            fontFamily: {
                sans: ['Poppins', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                "dark-indigo": "#0D0322",
                primary: "#27164B",
                secondary: "#82D0DF",
                "butter-yellow": "#F7FF82",
                "lavender-pink": "#DF82CB",
                "persian-pink": "#DF82CA",
                "iron-grey": "#DAD5E4",
                "pastel-purple": "#A99FBD",
                "bluish-purple": "#38255F",
                "smoke-purple": "#A497BE"
            },
        },
    },

    plugins: [
        forms,
        require('postcss-import'),
    ],

};
