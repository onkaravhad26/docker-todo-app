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

        stage('Push to Docker Hub') {
            steps {
                withCredentials([usernamePassword(
                    credentialsId: 'dockerhub-credentials',
                    usernameVariable: 'DOCKER_USERNAME',
                    passwordVariable: 'DOCKER_PASSWORD'
                )]) {
                    bat 'docker login -u %DOCKER_USERNAME% -p %DOCKER_PASSWORD%'
                    bat 'docker push onkaravhad/docker-todo-app:latest'
                }
            }
        }

        stage('Test') {
            steps {
                bat 'docker images'
            }
        }
    }
}