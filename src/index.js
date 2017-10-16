const fetchResponseCheck = response => {
    if (!response.ok) {
        throw Error(`Failed to fetch: server responded with a status of ${response.status} (${response.statusText})`);
    }
    return response;
}

export default fetchResponseCheck;
export { fetchResponseCheck };