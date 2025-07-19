const parseJSONPResponse = (jsonpStr, callbackName = 'ongroupstandings') => {
  try {
    // Extract the JSON data by removing the callback wrapper
    const startStr = `${callbackName}(`;
    let jsonStr = jsonpStr.trim();
    
    // Remove the callback function name and opening parenthesis
    if (!jsonStr.startsWith(startStr)) {
      throw new Error(`JSONP response does not start with expected callback name: ${callbackName}`);
    }

    // Remove the callback name and opening parenthesis
    jsonStr = jsonStr.substring(startStr.length);
    
    // Remove the trailing parenthesis and any semicolons
    jsonStr = jsonStr.replace(/\);?$/, '');

    // Clean any potential JSONP parameters
    jsonStr = jsonStr.replace(/,\s*\{[^}]*\}\);?$/, '');

    // Parse the cleaned JSON string
    try {
      return JSON.parse(jsonStr);
    } catch (parseError) {
      console.error('Failed to parse JSON:', jsonStr);
      throw new Error(`JSON parsing error: ${parseError.message}`);
    }
  } catch (error) {
    console.error('JSONP parsing error:', error);
    console.error('Original string:', jsonpStr);
    throw error;
  }
};

module.exports = parseJSONPResponse; 