const fs = require('fs');
const AWS = require('aws-sdk');
const body = fs.createReadStream('./helloworld.txt');

AWS.config.update({
    region: "us-east-1",
    accessKeyId: "",
    secretAccessKey:"",
    sessionToken:""
});

const s3 = new AWS.s3()

const params={
    Body: body,
    Bucket: 'marty-test-bucket-1',
    Key: '123/helloworld.txt'
}

s3.putObject(params,(err,data)=>{
    if(err){
        console.log(err.message)
    }
    else{
        console.log(data);
    }
});