"use strict";

const https = require("../util/https");

const commerceConfigurationURL = process.env.CCP_API;
const commerceConfigurationAPIURL = commerceConfigurationURL + "/api/v1";

exports.getEditionIdByPlan = async function (planId) {
    let editionId;

    const endpoint = "/editions?thirdPartyPlanID=" + planId;

    const result = await https.executeGetRequestWithoutHeaders(
        commerceConfigurationAPIURL,
        endpoint
    );

    try {
        editionId = result[0].editionID;
    } catch (exception) {
        editionId = null;
    }

    return editionId;
};

exports.getCheckOutURL = function (editionId) {
    return commerceConfigurationURL + "/en/us/checkout?editionID=" + editionId;
};
