const colors = require('tailwindcss/colors');

module.exports = {
    darkMode: 'media',
    purge: {
        content: ['src/**/*.js'],
    },
    theme: {
        extend: {
            zIndex: {
                '-10': '-10',
            },
            colors: {
                gray: colors.gray,
            },
            fontFamily: {
                display: ['RockyDisplay', 'sans-serif'],
                sans: ['RockyText', 'sans-serif'],
                monospace: ['Overpass Mono', 'sans-serif'],
            },
            spacing: {
                1: '4px',
                2: '8px',
                3: '12px',
                4: '16px',
                5: '20px',
                6: '24px',
                7: '28px',
                8: '32px',
                9: '36px',
                10: '40px',
                11: '44px',
                12: '48px',
                13: '52px',
                14: '56px',
                15: '60px',
                16: '64px',
                24: '96px',
            },
            height: {
                fc: 'fit-content',
            },
        },
    },
    variants: {
        extend: {
            backgroundOpacity: ['active'],
        },
    },
    plugins: [
        require('@tailwindcss/typography'),
        require('@tailwindcss/forms'),
    ],
};
