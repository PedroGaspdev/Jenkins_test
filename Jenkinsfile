pipeline {
    agent any
    
    tools {
        nodejs 'node20' 
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

            }
        }
    }
}
