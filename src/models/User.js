import mongoose, { Schema } from 'mongoose';

export const UserSchema = new Schema ({
	_id: String,
	userName : String,
	isHost : Boolean,
	isOnline : Boolean,
	lastModified : Date,
	balance : Number,
});

export default mongoose.model('user', UserSchema);
