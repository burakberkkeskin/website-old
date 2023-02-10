pipeline {
  agent any
  environment {
    DOCKERHUB_CREDENTIALS = credentials('dockerhub')
    // short commit hash
    SHORT_COMMIT = sh(returnStdout: true, script: 'git rev-parse --short HEAD').trim()
  }
  stages {
    stage('Build image') {
      steps {
        // buildx build latest and short commit hash
        sh 'docker buildx build -t safderun/website:latest -t safderun/website:${SHORT_COMMIT} .'
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