# Google Spreadsheets

Using Google Spreadsheets publish public, JSON API. 

## getSheet

*Uses JS Fetch, then returns a promise with the parsed results.*

### **Usage**

    const googlesheet = getSheet(1duOYY-LTfGHHNiV2BbPPhHyXbnxkvQDZG4oGAvLgX7g);

### **Parameters**

- `id` string. required. The unique ID of Google Sheet.
- `tab` integer. optional. The Google Sheet tab index.

### Return

- array. An array of objects returned from the Google JSON API. Each spreadsheet cell is an object.


## parseSheet

Whether you use the `getSheet`, Axios, jQuery get/ajax, XMLHttpRequest or whatever library, `parseSheet` can parse your results into a readable Array of Objects. This iterates through fetched JSON results, finds the header columns then creates array of individual objects. These objects are per row with the headers as properties keys with the cell values.

### **Usage**

    const data = getSheet(response);

### **Parameters**

- `response` json. required. The response from Google, should be in json format.

### Return

- array. An array of objects are per row with the headers as properties keys with the cell values