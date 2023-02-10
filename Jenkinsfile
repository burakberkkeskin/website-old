pipeline {
  agent any
  environment {
    DOCKERHUB_CREDENTIALS = credentials('dockerhub')
    tag = sh(returnStdout: true, script: "git rev-parse --short=10 HEAD").trim()
  }
  stages {
    stage('Build image') {
      steps {
        sh 'docker build -t safderun/website:latest -t safderun/website:${GIT_BRANCH}-${tag} .'
      }
    }
    stage('Test image') {
      steps {
        sh 'echo "Testing"'
      }
    }
    stage('Deploy image') {
      steps {
        sh 'echo $DOCKERHUB_CREDENTIALS_PSW | docker login -u $DOCKERHUB_CREDENTIALS_USR --password-stdin '
        sh 'docker push safderun/website -a'
      }
    }
  }
}