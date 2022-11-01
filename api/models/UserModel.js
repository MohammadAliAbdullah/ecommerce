module.exports = (mongoose) => {
    //User Schema
    const refreshTokens = mongoose.Schema({
        token: {
            type: String,
            required: true
        }
    });
    var userSchema = mongoose.Schema(
        {
            firstname: { type: String, require: true },
            lastname: { type: String, require: true },
            username: { type: String, unique: true },
            email: { type: String, unique: true, require: true },
            password: { type: String, require: true },
            role: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Role"
            },
            activeStatus: Boolean,
            createdBy: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "User"
            },
            refreshTokens: [refreshTokens]
        },
        { timestamps: true }
    )
    userSchema.method("toJSON", function () {
        const { __v, _id, ...object } = this.toObject();
        object.id = _id;
        return object;
    });
    const User = mongoose.model('User', userSchema);
    return User;
}