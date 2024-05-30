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

module.exports = {
    getMenuOptionsForDate
};