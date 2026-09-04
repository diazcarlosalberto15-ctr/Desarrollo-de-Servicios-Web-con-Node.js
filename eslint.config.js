const js = require('@eslint/js');

module.exports = [
    //Reglas para la verificacion del codigo
    //Reglas base de ESlint (Javascript)
    js.configs.recommended,{ 
        languageOptions : {
            ecmaVersion: 2022,
            sourceType: 'commonjs',
            globals: {
                require: 'readonly',
                module: 'writable',
                exports: 'writable'
            }

        },
        rules: {
            'no-unused-vars':'warn'
        },
    },
        //configuaracion adicional (Solo aplica a archivos de test)
        {

        },
        //Exclusiones globales (carpetas o archivos que eslint no debe verificar/analizar)
        {
            ignores: ['node_modules/','logs/']
        }
];