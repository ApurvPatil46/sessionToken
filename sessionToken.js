const AWS = require('aws-sdk');
const Credentials = require("aws-get-credentials");
const sts = new AWS.STS({apiVersion:"2011-06-15"})
const userId = 123;

const martyBucketPolicy = `{
    "Version" : "2012-10-17",
    "Statement" : [
        {
            "Sid":"VisualStudioCode",
            "Effect":"Allow",
            "Action": [
                "s3:PutObject",
                "s3:GetObject"
            ],
            "Resource": [
                "arn:aws:s3:::marty-test-bucket-1/${userId}/*"
            ]
        }
    ] 
}`

const role = {
    RoleArn: "arn:aws:iam::143631128225:role/WebClientRole",
    Policy: martyBucketPolicy,
    RoleSessionName: "WebClientRole",
    DurationSeconds: 3600      //1 hour   
}

sts.assumeRole(role,(err,data) => {
    console.log({
        accessKeyId: data.Credentials.AccessKeyId,   
        secretAccessKey: data.Credentials.SecretAccessKey,
        sessionToken: data.Credentials.SessionToken
    });
});