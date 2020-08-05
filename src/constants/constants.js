export const REQUEST = {
    queryMethod: 'body',
    method: 'post',
    baseURL: 'https://cors-anywhere.herokuapp.com/https://api-v3.igdb.com/',
    headers: {
        'Access-Control-Allow-Origin': '*',
        'user-key': 'bcfc2527f2248a1ab7d5625a20c90223',
        'Accept': 'application/json',
        'Origin': 'X-Requested-With'
    },
    responseType: 'json'
}