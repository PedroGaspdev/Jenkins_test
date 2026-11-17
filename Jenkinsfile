pipeline {
    agent any
    
    tools {
        // Usa o nome exato que você configurou no Global Tool Configuration
        nodejs 'node18' 
    }

    stages {
        stage('Preparação (Checkout)') {
            steps {
                echo 'Baixando o código do GitHub...'
                checkout scm
            }
        }
        
        stage('Instalação (Build)') {
            steps {
                echo 'Instalando dependências...'
                sh 'npm install'
            }
        }
        
        stage('Testes Automatizados') {
            steps {
                echo 'Executando testes com Jest...'
                sh 'npm test'
            }
        }
        
        stage('Simulação de Deploy') {
            steps {
                echo 'Deploy realizado com sucesso em ambiente de testes!'
                // Em um cenário real, aqui entraria um script para subir no servidor
            }
        }
    }
}
