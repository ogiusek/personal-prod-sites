pipeline {
    agent any

    stages {
        stage('Debug') {
            steps {
                echo 'Hello! The pipeline is running successfully.'
                sh 'printenv' // Optional: This logs all environment variables
            }
        }
    }
}
// pipeline {
//     agent {}
//
//     stages {
//         stage('Build & Test') {
//             steps {
//                 echo 'Installing dependencies and running unit tests...'
//                 // sh 'npm install && npm test' or './gradlew test'
//             }
//         }
//
//         stage('Deploy to Staging') {
//             when { branch 'main' }
//             steps {
//                 echo "Deploying ${env.BRANCH_NAME} to Staging Environment..."
//                 // Add your deployment script/helm command here
//             }
//         }
//
//         stage('Quality Gate (Manual)') {
//             // This pauses the pipeline for human verification
//             when { branch 'main' }
//             steps {
//                 timeout(time: 1, unit: 'HOURS') {
//                     input message: "Does Staging look good? Approve for Production?", ok: "Deploy!"
//                 }
//             }
//         }
//
//         stage('Deploy to Production') {
//             when { branch 'main' }
//             steps {
//                 echo 'Deploying to Production servers...'
//                 // sh './deploy-prod.sh'
//             }
//         }
//     }
//
//     post {
//         always {
//             echo 'Cleaning up workspace...'
//         }
//         failure {
//             echo 'Pipeline failed! Sending notification to Slack/Email...'
//         }
//     }
// }
