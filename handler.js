"use strict";
const serverless = require("serverless-http");
const express = require("express");
const app = express();

app.get("/tasks", function(req, res) {
	res.json({
		tasks: [
			{ id: 1, description: "Get milk", completed: false, priority: 1 },
			{
				id: 2,
				description: "Clean kitchen",
				completed: false,
				priority: 2
			},
			{
				id: 3,
				description: "Cook dinner",
				completed: false,
				priority: 3
			},

			{
				id: 4,
				description: "Other task",
				completed: false,
				priority: 3
			},
			{
				id: 5,
				description: "More tasks",
				completed: false,
				priority: 3
			}
		]
	});
});

module.exports.tasks = serverless(app);
