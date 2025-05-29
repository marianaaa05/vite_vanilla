pipeline {
    agent any

    tools {
        nodejs "NodeJS_24"
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/marianaaa05/vite_vanilla.git' //especifica la rama main
            }
        }

        stage('Instalar dependencias') {
            steps {
                bat 'npm install'
            }
        }

        stage('Construir proyecto') {
            steps {
                bat 'npm run build'
            }
        }

        stage('Resultado') {
            steps {
                echo 'Proyecto construido correctamente con Vite.'
            }
        }
        stage('Analizar código con ESLint') {
            steps {
                bat 'npx eslint src/ --ext .js'
            }
        }

    }
}
