import mongoose from 'mongoose';


const productSchema = new mongoose.Schema({
    product_name: {
        type: String,
        required: true,
    },
    product_price: {
        type: Number,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    isInStock: {
        type: Boolean,
        required: true,
    },
    password: {
        type: String,
        required: true,
        minlength: 8,
        maxlength: 50,
    },
    confirm_password: {
        type: String,
        required: true,
        minlength: 8,
        maxlength: 50,
        validate: {
            validator: function () {
                return this.password === this.confirm_password;
            },
            message: 'Password and confirm password should match.',
        }
    }
}, {timestamps: true})

const ProductModel = mongoose.model('product', productSchema);

module.exports = ProductModel;