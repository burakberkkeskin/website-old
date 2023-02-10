pipeline {
  agent any
  environment {
    DOCKERHUB_CREDENTIALS = credentials('dockerhub')
  }
  stages {
    stage('Build image') {
      steps {
        sh 'docker build -t safderun/website .'
      }
    }
    stage('Test image') {
      steps {
        sh 'echo "Testing"'
      }
    }
    stage('Deploy image') {
      steps {
        sh 'docker tag safderun/website safderun/website:latest'
        sh 'docker tag  safderun/website safderun/website:${GIT_COMMIT}'
        sh 'docker login -u $$DOCKERHUB_CREDENTIALS_USR -p $$DOCKERHUB_CREDENTIALS_PSW'
        sh 'docker push safderun/website'
      }
    }
  }
}