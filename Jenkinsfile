pipeline {
    agent any

    stages {

        stage('Build Image') {
            steps {
                sh 'docker build -t dhilshad/task22-app:${BUILD_NUMBER} .'
            }
        }

        stage('Push Image') {
            steps {
                sh 'docker push dhilshad/task22-app:${BUILD_NUMBER}'
            }
        }
    }
}
