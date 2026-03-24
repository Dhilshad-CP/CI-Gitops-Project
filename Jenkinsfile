pipeline {
    agent any

    stages {

        stage('Build Image') {
            steps {
                sh 'docker build -t dhilshad/task22-app:${BUILD_NUMBER} .'
            }
        }

        stage('Docker Login') {
            steps {
                sh 'echo "Bridgeskill100" | docker login -u dhilshad --password-stdin'
            }
        }

        stage('Push Image') {
            steps {
                sh 'docker push dhilshad/task22-app:${BUILD_NUMBER}'
            }
        }
    }
}
