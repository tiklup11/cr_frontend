const Mongoose = require('mongoose');
const Schema = Mongoose.Schema;

const TeamSchema = new Schema({
    teamName : String,
    adminId : String,
    // teamPlayersId : [String],
    // scoreCard : [mongoose.Schema.Types.Mixed]
});
