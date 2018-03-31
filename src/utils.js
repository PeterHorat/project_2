function validateResponse(response) {
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return response;
}

function logResult(result) {
    console.log(result);
}

function logError(error) {
    console.log('Looks like there was a problem: \n', error);
}

function readResponseAsJSON(response) {
    return response.json();
}

// very wide to provide as full screen feeling
export const skyAndGroundWidth = 5000;

