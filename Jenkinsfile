pipeline {
  agent any
  environment {
    DOCKERHUB_CREDENTIALS = credentials('dockerhub')
    COMMIT_HASH_SHORT = sh(returnStdout: true, script: 'git rev-parse --short HEAD').trim()
  }
  stages {
    stage('Build image') {
      steps {
        sh 'docker buildx build -t safderun/website:latest -t safderun/website/${COMMIT_HASH_SHORT} .'
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