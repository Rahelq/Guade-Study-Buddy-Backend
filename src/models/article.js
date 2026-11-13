const mongoose = require("mongoose");

const articleSchema = new mongoose.Schema({
	title: { type: String, required: true },
	content: { type: String, required: true },
	author: { type: String },
	createdAt: { type: Date, default: Date.now },
	updatedAt: { type: Date, default: Date.now },
	// Add any other relevant fields for articles
	subject: { type: String },
	tags: [String],
});
articleSchema.index({
	title: "text",
	content: "text",
	subject: "text",
	tags: "text",
});
module.exports = mongoose.model("Article", articleSchema);
