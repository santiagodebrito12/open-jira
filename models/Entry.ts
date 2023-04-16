import mongoose, {Model,Schema} from 'mongoose';
import { Entry } from '@/interfaces';

interface IEntry extends Entry{
}

const entrySchema = new Schema({
    description:{type:String,required:true},
    createdAt:{type:Number,required:true},
    status:{
        type:String,
        enum:{
            values:['pending','progress','completed'],
            message:'{VALUE} is not supported'
            },
        required:true
    },
});

const EntryModel:Model<IEntry> = mongoose.models.Entry || mongoose.model('Entry',entrySchema);


export default EntryModel;