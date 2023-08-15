#!groovy

@Library("dsoLibrary@master") _

// populate variables from folder
withFolderProperties{

    if (params.BUILD_ENVIRONMENT == 'dev') {
        REGISTRY = env.REGISTRY_DEV
    } else if (params.BUILD_ENVIRONMENT == 'trust') {
        REGISTRY = env.MIRROR_REGISTRY_DEV
    }
}

pipeline {
    agent {
        label "dev"
    }

    stages {
        stage("Set build name") {
            steps {
                script {
                    // Назначение версии образа (последний коммит в бранче)
                    APP_VERSION = sh (
                        script: "git describe --tags ${GIT_COMMIT} | sed -r 's/\\+[0-9]+//g' || git rev-parse --short ${GIT_COMMIT}",
                        returnStdout: true
                    ).trim()
                }

                // Назначение имени сборки
                wrap([$class: 'BuildUser']){
				    script { buildName "${env.BUILD_NUMBER}-${params.BUILD_ENVIRONMENT} | ${params.APP_NAME}: ${APP_VERSION}" }
                    buildDescription "Executed @ ${NODE_NAME}. Build started by ${BUILD_USER}"
                }
            }
        }
        
        stage("Clair security check") {
            steps {
                script {
                    def imageName = "${REGISTRY}/${params.OCP_NAMESPACE}/${params.APP_NAME}:${params.APP_VERSION}"
                    doJob("/DSO_SERVICE/dev/clair/clair-report", [[$class: 'StringParameterValue', name: 'IMAGE', value: imageName]])
                }
            }
        }
    }
}