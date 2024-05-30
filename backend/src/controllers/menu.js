const { getCurrentTimeWithSeconds } = require('../utils/utils.js');

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

const createMenuOption = (req, res) => {
    const requestInboundTime = getCurrentTimeWithSeconds();
    const data = "Template for creating a menu option";

    console.log(req.body);
    
    res.status(200).json({
        requestInboundTime: requestInboundTime,
        requestOutboundTime: getCurrentTimeWithSeconds(),
        responseVerdict: "Success",
        data: {
            about: data,
        },
    });

}

module.exports = {
    getMenuOptionsForDate,
    createMenuOption
};