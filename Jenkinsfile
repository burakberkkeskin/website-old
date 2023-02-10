pipeline {
  agent any
  environment {
    DOCKERHUB_CREDENTIALS = credentials('dockerhub')
    GIT_COMMIT_SHORT = sh(
                script: "printf \$(git rev-parse --short ${GIT_COMMIT})",
                returnStdout: true
        )
  }
  stages {
    stage('Build image') {
      steps {
        // buildx build latest and short commit hash
        sh 'docker buildx build -t safderun/website:latest -t safderun/website:${GIT_COMMIT_SHORT} .'
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