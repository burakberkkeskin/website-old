pipeline {
  agent any
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
        sh 'docker login -u $DOCKER_USER -p $DOCKER_PASS'
        sh 'docker push safderun/website'
      }
    }
  }
}