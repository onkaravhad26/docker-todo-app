pipeline {
    agent any

    stages {

        stage('Clone') {
            steps {
                echo 'Code downloaded from GitHub'
            }
        }

        stage('Build Docker Image') {
            steps {
                bat 'docker build -t onkaravhad/docker-todo-app:latest .'
            }
        }

        stage('Test') {
            steps {
                bat 'docker images'
            }
        }
    }
}