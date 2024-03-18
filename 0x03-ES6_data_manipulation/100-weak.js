export const weakMap = new WeakMap();

export function queryAPI(endpoint) {
    let request = weakMap.get(endpoint) || 0;

    request += 1;

    weakMap.set(endpoint, request);

    if (request >= 5) {
        throw Error('Endpoint load is high');
    }
    return request;
}
