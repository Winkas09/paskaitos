export function getUrlParams(param) {
  const queryParams = location.search;
  console.log("Query Params:", queryParams); // Debugging line
  const urlParams = new URLSearchParams(queryParams);
  const result = urlParams.get(param);
  console.log(`Result for param "${param}":`, result); // Debugging line

  return result;
}
