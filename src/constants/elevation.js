export const getElevation = dp => {
    switch(dp) {
        case "1dp":
            return "box-shadow: 0 1px 4px -2px rgba(29, 27, 26, 0.32), 0 1px 2px 0px rgba(29, 27, 26, 0.16);";
        case "2dp": 
            return "box-shadow: 0 4px 8px -4px rgba(29, 27, 26, 0.12), 0 2px 4px 0px rgba(29, 27, 26, 0.16);";
        case "3dp": 
            return "box-shadow: 0 6px 12px -6px rgba(29, 27, 26, 0.12), 0 3px 6px 0px rgba(29, 27, 26, 0.12);";
        case "4dp":
            return "box-shadow: 0 8px 16px -4px rgba(29, 27, 26, 0.04), 0 4px 8px 0px rgba(29, 27, 26, 0.08);"
        case "5dp":
            return "box-shadow: 0 10px 20px -2px rgba(29, 27, 26, 0.05), 0 5px 10px 0px rgba(29, 27, 26, 0.05);";
        case "6dp":
            return "box-shadow: 0 16px 24px -4px rgba(29, 27, 26, 0.04), 0 8px 16px 0px rgba(29, 27, 26, 0.04);";
        default:
            return "box-shadow: none;";
    }
};

export const getDivider = type => {
    switch(type) {
        case "shadow-down":
            return "box-shadow: 0 1px 0px 0px rgba(29, 27, 26, 0.16)";
        case "shadow-up": 
            return "box-shadow: 0 -1px 0px 0px rgba(29, 27, 26, 0.16);";
        case "inner-down": 
            return "box-shadow: 0 -1px 0px 0px rgba(219, 217, 215, 1);";
        case "inner-up": 
            return "box-shadow: 0 1px 0px 0px rgba(219, 217, 215, 1);";
        default:
            return "";
    }
};

