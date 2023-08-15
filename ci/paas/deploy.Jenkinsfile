#!groovy
  
// import shared library
@Library("dsoLibrary@master") _

withFolderProperties {
    PROJECT_NAME = 'prv'

    DEPLOY_ENVIRONMENT = env.DEPLOY_ENVIRONMENT
    OCP_URL_TARGET = env.OCP_URL_TARGET
    OKD_DOMAIN = env.OKD_DOMAIN

    PROJECT_ID = env.PROJECT_ID
    OCP_NAMESPACE = env.OCP_NAMESPACE
    PAAS_HUB_SESSION_ID = env.PAAS_HUB_SESSION_ID
    CLUSTER_ID = env.CLUSTER_ID
    LANDSCAPE_ID = env.LANDSCAPE_ID

    switch(LANDSCAPE_ID) {
        case 'dev':
            REGISTRY    = env.REGISTRY_DEV
            break
        case 'uat':
            REGISTRY    = env.REGISTRY_TRUST
            break
        case 'preprod':
            REGISTRY    = env.PROD_REGISTRY_TRUST
            break
        case 'prod':
            REGISTRY    = env.PROD_REGISTRY_TRUST
            break
    }
}

// Объявление переменных для VAULT 
VAULT_SECRET_PREFIX_PATH = "paashub"
VAULT_SECRET_PATH = "${PROJECT_ID}/caas/${LANDSCAPE_ID}-${CLUSTER_ID}-${OCP_NAMESPACE}/${OCP_NAMESPACE}/accounts/sa"
VAULT_APPROLE_CRED_ID = "jenkins-user-${PROJECT_ID}-role"

// Объединяем APP_NAME с COMPANY_ID
if (params.COMPANY) {
    OCP_APP_NAME = "${PROJECT_NAME}-${params.COMPANY}-${params.APP_NAME}"
} else {
    OCP_APP_NAME = "${PROJECT_NAME}-${params.APP_NAME}"
}

pipeline {
    agent {
        label DEPLOY_ENVIRONMENT
    }

    options {
        buildDiscarder(logRotator(numToKeepStr: '50', artifactNumToKeepStr: '50'))
    }

    stages {
        stage("Set build name") {
            steps {
                script {
                    // Назначение версии образа (либо параметр APP_VERSION, либо последний коммит в бранче)
                    if (!params.APP_VERSION) {
                        APP_VERSION = sh (
                            script: "git describe --tags ${env.GIT_COMMIT} | sed -r 's/\\+[0-9]+//g' || git rev-parse --short ${GIT_COMMIT}",
                            returnStdout: true
                        ).trim()
                    }
                }

                // Назначаем имя сборки
                wrap([$class: 'BuildUser']){
				    script { buildName "${env.BUILD_NUMBER}-${LANDSCAPE_ID} | ${OCP_APP_NAME}: ${APP_VERSION}" }
                    buildDescription "Executed @ ${NODE_NAME}. Build started by ${BUILD_USER}"
                }
            }
        }

        stage("OCP login") {
            steps {
                doOc("loginVault", ["ocpCredId": "$VAULT_APPROLE_CRED_ID",
                                    "ocpUrlTarget": "$OCP_URL_TARGET",
                                    "ocpNamespace": "$OCP_NAMESPACE",
                                    "vaultUrl": "$VAULT_TRUST_URL",
                                    "secretPrefixPath": "$VAULT_SECRET_PREFIX_PATH",
                                    "secretPath": "$VAULT_SECRET_PATH"])
            }
        }

		stage("OCP deploy") {
            steps {
                // Формируеим имя образа для деплоя
                script {
                    IMAGE_NAME = "${REGISTRY}/${OCP_NAMESPACE}/${params.APP_NAME}:${APP_VERSION}"
                }
                // Замена образа в Openshift
                echo "=====ocp tag new image as latest====="
                sh """																				  
                    oc tag ${IMAGE_NAME} ${OCP_APP_NAME}:latest --namespace=${OCP_NAMESPACE}
                """
            }
        }

		stage("OCP check imagestream & deploy status") {
            when {
                not {
                    expression {
                        def status = sh(
                            script: "oc describe is/${OCP_APP_NAME} --namespace=${OCP_NAMESPACE} | grep NotFound", 
                            returnStatus: true)
                        if (status != 0) {
                            return false;
                        }
                        else {
                            currentBuild.result = "FAILURE"
                            throw new Exception("Throw to stop pipeline")
                        }
                    }
                }
            }
            steps {
                echo "==== ocp get status for ${OCP_APP_NAME} ===="
                sh """
                    oc rollout status dc/${OCP_APP_NAME} --namespace=${OCP_NAMESPACE} | grep "successfully rolled out"
                """
            }
        }
    }
}
