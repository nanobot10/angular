pipeline {
    agent any
    stages {

        stage("build"){
            steps{
                echo 'buid the code...'
                nodejs('nodejs15'){
                    sh 'npm install'
                }
            }
        }

        stage('docker-package') {
            agent any
            when {
                branch 'master'
            }
            steps {
                echo 'Packaging app with docker'
                script {
                    docker.withRegistry('https://index.docker.io/v1/','dennis-dockerhub-login') {
                        def appImage = docker.build("56373480/practica2-app:master", "./tallerApp/")
                        appImage.push('master')
                    }
                }

            }
        }

        stage("Deploy dev"){
            when {
                branch 'master'
            }
            steps{
                echo 'deploy the code in development environment'
                script {
                    withCredentials([sshUserPrivateKey(credentialsId: 'puppet-slave-key', keyFileVariable: 'SSH_KEY_FOR_AWS', passphraseVariable: '', usernameVariable: 'SSH_USER_AWS')]) {
                        def remote = [:]
                        remote.name = 'aws'
                        remote.host = '3.17.13.21'
                        remote.allowAnyHosts = true
                        remote.user = SSH_USER_AWS
                        remote.identityFile = SSH_KEY_FOR_AWS
                        sshCommand remote: remote, command: 'nohup sudo /opt/puppetlabs/bin/puppet agent -tod || test $? -eq 2'
                    }
                }
            }
        }

        stage("Deploy production"){
            when {
                branch 'master'
            }
            steps{
                echo 'deploy the code in production environment'
                script {
                    withCredentials([sshUserPrivateKey(credentialsId: 'puppet-slave-key', keyFileVariable: 'SSH_KEY_FOR_AWS', passphraseVariable: '', usernameVariable: 'SSH_USER_AWS')]) {
                        def remote = [:]
                        remote.name = 'aws'
                        remote.host = '3.15.159.160'
                        remote.allowAnyHosts = true
                        remote.user = SSH_USER_AWS
                        remote.identityFile = SSH_KEY_FOR_AWS
                        sshCommand remote: remote, command: 'nohup sudo /opt/puppetlabs/bin/puppet agent -tod || test $? -eq 2'
                    }
                }
            }
        }
    }
}