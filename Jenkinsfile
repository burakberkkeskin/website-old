pipeline {
  agent any
  environment {
    DOCKERHUB_CREDENTIALS = credentials('dockerhub')
    SHORT_COMMIT = "${GIT_COMMIT[0..7]}"
  }
  stages {
    stage('Build image') {
      steps {
        sh 'docker buildx build -t safderun/website:latest -t safderun/website/${SHORT_COMMIT} .'
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