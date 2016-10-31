require('babel-register');
const fs = require('fs');
const path = require('path');
const { graphql } = require('graphql');
const { introspectionQuery, printSchema } = require('graphql/utilities');
const Schema = require('../src/models/schema').default;

function buildSchema() {
	return graphql(Schema, introspectionQuery).then(result => {
		if (result.errors) {
			console.error(
				'ERROR introspecting schema: ',
				JSON.stringify(result.errors, null, 2)
			);
		} else {
			fs.writeFileSync(
				path.join('./data/schema.json'),
				JSON.stringify(result, null, 2)
			);
			console.log(`  write file ${path.join('./data/schema.json')}`);
		}

		// Save user readable type system shorthand of schema
		fs.writeFileSync(
			path.join('./data/schema.graphql'),
			printSchema(Schema)
		);
		console.log(`  write file ${path.join('./data/schema.graphql')}`);
	});
}

buildSchema().catch(e => {
	console.log(e);
	process.exit(0);
});
