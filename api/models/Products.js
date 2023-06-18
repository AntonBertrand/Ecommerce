import {Schema, model} from 'mongoose';

const ProductsSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: false
    },
    price: {
        type: Number,
        required: true
    }
});

export default mongoose.model("Products", ProductsSchema);