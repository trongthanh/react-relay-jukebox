/**
 * IMPORTANT: remove react-relay plugin in babelrc before running this script,
 * or it will get into a dependency loop
 */
require('babel-register');
const fs = require('fs');
const path = require('path');
const { graphql } = require('graphql');
const graphqlUtils = require('graphql/utilities');
const { default: mongooseSchema } = require('../src/models/schema');

// Save JSON of full schema introspection for Babel Relay Plugin to use
graphql(mongooseSchema, graphqlUtils.introspectionQuery).then((result) => {
	if (result.errors) {
		console.error(
			'ERROR introspecting schema: ',
			JSON.stringify(result.errors, null, 2)
		);
	} else {
		fs.writeFileSync(
			path.join(__dirname, '../data/schema.json'),
			JSON.stringify(result, null, 2)
		);
	}
});
// Save user readable type system shorthand of schema
fs.writeFileSync(
	path.join(__dirname, '../data/schema.graphql'),
	graphqlUtils.printSchema(mongooseSchema)
);
