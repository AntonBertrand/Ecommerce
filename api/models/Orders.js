import {mongoose, Schema} from 'mongoose';

const OrdersSchema = new Schema({
    user: {
        type: String,
        required: true
    },
    cart: [{
        itemId: {
            type: ObjectID,
            ref: 'product',
            required: true
         }
    }],
    value: {
        type: Number,
        required: true
    },
    notes: {
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