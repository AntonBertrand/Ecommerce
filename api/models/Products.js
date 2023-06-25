import {mongoose, Schema} from "mongoose";

const ProductsSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    },
    features: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: false
    },
    image2: {
        type: String,
        required: false
    },
    image3: {
        type: String,
        required: false
    },
    image4: {
        type: String,
        required: false
    },
    price: {
        type: Number,
        required: true
    },
    rating: {
        type: Number,
        required: false
    }
}, {
        collection: 'products',
        timestamps: true
});

export default mongoose.model("Products", ProductsSchema);