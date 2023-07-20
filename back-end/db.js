const mongoose = require("mongoose")

module.exports = () => {
    const connectionParam = {
        useNewUrlParser: true,
		useUnifiedTopology: true,
    };
    try {
        mongoose.connect(process.env.DB,connectionParam);
        console.log("Connected to database succefully");
    } catch (error) {
        console.log(error);
		console.log("Could not connect database!");
    }
}
