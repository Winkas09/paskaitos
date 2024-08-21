export function getUrlParams(param) {
  const queryParams = location.search;
  const urlParams = new URLSearchParams(queryParams);
  const result = urlParams.get(param);

  return result;
}
