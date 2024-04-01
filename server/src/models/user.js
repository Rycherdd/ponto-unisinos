import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const UserSchema = new mongoose.Schema({
    username: {type: String, required: true, unique: true},
    password: {type: String, required: true},
}, {collection: 'users'});

UserSchema.pre('save', function (next) {
    if (!this.isModified('password')) return next();

    bcrypt.hash(this.password, 10, (err, passwordHash) => {
        if (err) return next(err);

        this.password = passwordHash;
        next();
    });
});

UserSchema.methods.comparePassword = function (password) {
    return this.password === password;
};

const User = mongoose.model('User', UserSchema);

export default User;