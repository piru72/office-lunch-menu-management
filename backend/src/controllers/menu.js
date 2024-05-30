const { getCurrentTimeWithSeconds } = require('../utils/utils.js');
const Menu = require('../models/menu.js');

const getMenuOptionsForDate = (req, res) => {
    const requestInboundTime = getCurrentTimeWithSeconds();
    const data = "Template for menu options by date";

    res.status(200).json({
        requestInboundTime: requestInboundTime,
        requestOutboundTime: getCurrentTimeWithSeconds(),
        responseVerdict: "Success",
        data: {
            about: data,
        },
    });
}

const createMenuOption = async (req, res) => {

    try {
        const { date, options } = req.body;
        const requestInboundTime = getCurrentTimeWithSeconds();

        const newMenuOption = await Menu.addMenuOption(date, options);

       
        res.status(201).json({ 
            requestInboundTime: requestInboundTime,
            requestOutboundTime: getCurrentTimeWithSeconds(),
            responseVerdict: "Menu option added successfully",
            data: {
                menuOption: newMenuOption ,
            }
        });
    } catch (error) {
        
        console.error('Error adding menu option:', error);
        res.status(500).json({ message: 'Internal server error' });
    }

}

module.exports = {
    getMenuOptionsForDate,
    createMenuOption
};