pipeline {
    agent any

    tools {
        nodejs "NodeJS_18" // Asegúrate de tener una instalación de Node en Jenkins
    }

    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/marianaaa05/vite_vanilla.git'
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
                echo '✅ Proyecto construido correctamente con Vite.'
            }
        }
    }
}
