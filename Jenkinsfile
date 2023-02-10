// build and push docker image jenkins file 
pipeline {
  agent any
  stages {
    def app
    stage ('Checkout') {
      steps {
        checkout scm
      }
    }
    stage('Build') {
      app = docker.build('safderun/website')
    }
    stage('Push') {
      docker.withRegistry('https://registry.hub.docker.com', 'docker-hub-credentials' {
        app.push("${env.BUILD_NUMBER}")
        app.push('latest')
      })
    }
  }
}
