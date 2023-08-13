import {mongoose, Schema} from 'mongoose';

const OrdersSchema = new Schema({
    user: {
        type: String,
        required: true
    },
    cart: [{
        itemId: {type: Schema.Types.ObjectId, ref: 'products', required: false},
        title: {type: String,required: true},
        image: { type: String,required: false},
        price: {type: Number, required: true},
        amount: {type: Number, required: true}
    }],
    value: {
        type: Number,
        required: true
    },
    shippingAddress: {
        type: String,
        required: false
    },
    paymentType: {
        type: String,
        required: true
    },
    itemCount: {
        type: Number,
        required: true
    },
    paymentStatus: {
        type: Boolean,
        required: true
    }

}, {
    collection: 'orders',
    timestamp: true
});

export default mongoose.model('Orders', OrdersSchema);