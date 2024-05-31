// defination for model of menu
const mongoose = require('mongoose');

const menuSchema = new mongoose.Schema({
    date: {
        type: Date,
        required: true
    },
    options: {
        type: [String],
        required: true
    }
});


menuSchema.statics.addMenuOption = async function (date, options) {
    try {

        const newMenu = new this({
            date,
            options
        });

        await newMenu.save();

        return newMenu;
    } catch (error) {

        throw new Error('Error adding menu option: ' + error.message);
    }
};

module.exports = mongoose.model('Menu', menuSchema);