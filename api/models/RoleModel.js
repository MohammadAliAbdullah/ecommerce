module.exports = (mongoose) => {
    //Role Schema
    var roleSchema = mongoose.Schema(
        {
            name: String,
            activeStatus: Boolean,
            createdBy: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "User"
            }
        },
        { timestamps: true }
    )
    roleSchema.method("toJSON", function () {
        const { __v, _id, ...object } = this.toObject();
        object.id = _id;
        return object;
    });
    const role = mongoose.model('Role', roleSchema);
    return role;
}