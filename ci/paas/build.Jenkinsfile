#!groovy
  
// import shared library
@Library("dsoLibrary@master") _

withFolderProperties {
    if (BUILD_ENVIRONMENT == 'dev') {
        REGISTRY = env.REGISTRY_DEV
        REGISTRY_CRED_ID = env.REGISTRY_DEV_CRED_ID
        QUAY_REGISTRY = env.QUAY_REGISTRY_DEV
        QUAY_REGISTRY_CRED_ID = env.QUAY_REGISTRY_DEV_CRED_ID
        MS_REGISTRY = env.MS_REGISTRY_DEV
        MS_REGISTRY_CRED_ID = env.MS_REGISTRY_DEV_CRED_ID
        RH_REGISTRY = env.RH_REGISTRY_DEV
        RH_REGISTRY_CRED_ID = env.RH_REGISTRY_DEV_CRED_ID
        PYPI_REPOSITORY = env.PYPI_REPOSITORY_DEV
        PYPI_REPOSITORY_EXTRA = env.PYPI_REPOSITORY_EXTRA_DEV
        PYPI_HOST = env.PYPI_HOST_DEV
        NPM_REGISTRY = env.NPM_REGISTRY_DEV
    } else if (BUILD_ENVIRONMENT == 'trust') {
        REGISTRY = env.REGISTRY_TRUST
        REGISTRY_CRED_ID = env.REGISTRY_TRUST_CRED_ID
        PROD_REGISTRY = env.PROD_REGISTRY_TRUST
        PROD_REGISTRY_CRED_ID = env.PROD_REGISTRY_TRUST_CRED_ID
        QUAY_REGISTRY = env.QUAY_REGISTRY_TRUST
        QUAY_REGISTRY_CRED_ID = env.QUAY_REGISTRY_TRUST_CRED_ID
        MS_REGISTRY = env.MS_REGISTRY_TRUST
        MS_REGISTRY_CRED_ID = env.MS_REGISTRY_TRUST_CRED_ID
        RH_REGISTRY = env.RH_REGISTRY_TRUST
        RH_REGISTRY_CRED_ID = env.RH_REGISTRY_TRUST_CRED_ID
        PYPI_REPOSITORY = env.PYPI_REPOSITORY_TRUST
        PYPI_REPOSITORY_EXTRA = env.PYPI_REPOSITORY_EXTRA_TRUST
        PYPI_HOST = env.PYPI_HOST_TRUST
        NPM_REGISTRY = env.NPM_REGISTRY_TRUST
    }
}

pipeline {
    agent {
        label params.BUILD_ENVIRONMENT
    }

    options {
        buildDiscarder(logRotator(numToKeepStr: '50', artifactNumToKeepStr: '50'))
    }

    stages {
        stage("Set build name") {
            steps {
                // Set build name for Jenkins
                wrap([$class: 'BuildUser']) {
				    script { buildName "${env.BUILD_NUMBER}-${params.BUILD_ENVIRONMENT} | ${params.APP_NAME}: ${params.APP_VERSION}" }
                    buildDescription "Executed @ ${NODE_NAME}. Build started by ${BUILD_USER}"
                }
            }
        }

        stage("Docker registry login") {
            steps {
                doDocker("login", [
                        "registryCred": REGISTRY_CRED_ID,
                        "registry": REGISTRY
                    ]
                )
                doDocker("login", [
                        "registryCred": RH_REGISTRY_CRED_ID,
                        "registry": RH_REGISTRY
                    ]
                )
            }
        }

        stage("Docker build image") {
            steps {
                doDocker("build", [
                    "registry": REGISTRY,
                    "registry_path": params.OCP_NAMESPACE,
                    "image_name": params.APP_NAME,
                    "image_tag": APP_VERSION,
                    "dockerfileName": params.DOCKERFILE_NAME,
                    "additionalArgs": "\
                        --build-arg DOCKER_REGISTRY=$RH_REGISTRY \
                        --build-arg VERSION=$APP_VERSION \
                        --build-arg PYPI_REPOSITORY=$PYPI_REPOSITORY \
                        --build-arg PYPI_REPOSITORY_EXTRA=$PYPI_REPOSITORY_EXTRA \
                        --build-arg PYPI_HOST=$PYPI_HOST \
                        --build-arg NPM_REGISTRY=$NPM_REGISTRY"
                    ]
                )
            }
        }

        stage("Docker push image") {
            steps {
                doDocker("push", [
                        "registry": REGISTRY,
                        "registry_path": params.OCP_NAMESPACE,
                        "image_name": params.APP_NAME,
                        "image_tag": APP_VERSION
                    ]
                )
            }
        }
    }
}