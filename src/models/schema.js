import { getSchema } from '@risingstack/graffiti-mongoose';
import Song from './Song';
import User from './User';

export default getSchema([Song, User]);
