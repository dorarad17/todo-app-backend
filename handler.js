"use strict";
const uuidv4 = require("uuid/v4");
const serverless = require("serverless-http");
const express = require("express");
const app = express();

app.get("/tasks", function(req, res) {
	res.json({
		tasks: [
			{ id: uuidv4(), description: "Get milk", completed: false, priority: 1 },
			{
				id: uuidv4(),
				description: "Clean kitchen",
				completed: false,
				priority: 2
			},
			{
				id: uuidv4(),
				description: "Cook dinner",
				completed: false,
				priority: 3
			},

			{
				id: uuidv4(),
				description: "Other task",
				completed: false,
				priority: 3
			},
			{
				id: uuidv4(),
				description: "More tasks",
				completed: false,
				priority: 3
			}
		]
	});
});

module.exports.tasks = serverless(app);
