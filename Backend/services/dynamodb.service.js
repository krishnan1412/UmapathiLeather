const AWS = require('aws-sdk');
AWS.config.update({ region: 'us-east-1' });

const dynamo = new AWS.DynamoDB.DocumentClient();

exports.scan = async (tableName) => {
  const result = await dynamo.scan({ TableName: tableName }).promise();
  return result.Items;
};
