// Google Spreadheets: Get Sheet by ID & Tab Index.
const getSheet = (id, tab = 1) => {
  // Return if no id.
  if (!id) {
    return;
  }
  // Fetch Googlesheet.
  return fetch(
    `https://spreadsheets.google.com/feeds/cells/${id}/${tab}/public/full?alt=json`
  )
    .then((response) => response.json())
    .then((data) => parseSheet(data.feed.entry))
    .catch((error) => console.error(error));
};

// Google Spreadsheet: Parse Sheet
const parseSheet = (data) => {
  // Variables
  let headers = {};
  let results = [];

  // Return if Empty.
  if (!data || data.length === 0) {
    return results;
  }

  // Set Headers
  for (let header of data) {
    // Break if not 1st Row.
    if (header.gs$cell.row !== "1") {
      break;
    }

    // Add New Header Item.
    headers[header.gs$cell.col] = header.content.$t;
  }

  // Parse Results
  data.forEach((cell) => {
    const index = cell.gs$cell.row;
    const prop =
      typeof headers[cell.gs$cell.col] !== "undefined"
        ? headers[cell.gs$cell.col]
        : `col_${cell.gs$cell.col}`;

    // New Record if Undefined
    if (typeof results[index] === "undefined") {
      results[index] = {};
    }

    // Set Property into Record
    results[index][prop] = cell.content.$t;
  });

  // Remove Headers from Data.
  results.splice(0, 2);

  // Results
  return results;
};
