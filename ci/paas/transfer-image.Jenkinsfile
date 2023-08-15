#!groovy

withFolderProperties {

    if (params.BUILD_ENVIRONMENT == 'dev') {
        REGISTRY = env.REGISTRY_DEV
    }
    if (params.BUILD_ENVIRONMENT == 'trust') {
        REGISTRY = env.REGISTRY_TRUST
    }
}

pipeline {
    agent none
 
    stages {
        stage ("Copy artifact") {
            steps {
                script {
                    def imageName = "${params.OCP_NAMESPACE}/${params.APP_NAME}:${params.APP_VERSION}"
                    build job: "/DSO_SERVICE/cp_dependency/cp-docker-with-approve", parameters: [
                        string(name: 'IMAGE', value: imageName),
                        string(name: 'FROM_REGISTRY', value: REGISTRY),
                        string(name: 'aprv_cc_mail', value: params.aprv_cc_mail)
                    ]
                }
            }
        }
    }
}