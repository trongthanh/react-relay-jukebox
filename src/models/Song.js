import mongoose, { Schema } from 'mongoose';

export const SongSchema = new Schema ({
	_id: String,
	timeAdded: Date,
	originalURL: { type: String, default: ''},
	origin: { type: String, enum: ['Soundcloud', 'NCT', 'Zing', 'YouTube'], default: '' },
	name: { type: String, default: ''},
	artist: { type: String, default: ''},
	streamURL: { type: String, default: ''},
	thumbURL: { type: String, default: ''},
	lyric: { type: String, default: ''},
	play: { type: Number, default: 0},
});

export default mongoose.model('song', SongSchema);
