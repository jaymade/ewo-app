// Define schema
var Schema = mongoose.Schema;

var EwoSchema = new Schema({
   userId: string,
   ewoId: number,
   title: string,
   descript: string,
   completed: boolean
});

// Compile model from schema
var Ewo = mongoose.model('Ewo', EwoSchema);
