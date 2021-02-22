const requestUrl = 'http://api.justin.ua/justin_pms_test/hs/v2/runRequest'
function sendRequest(body = null) {
    return new Promise((resolve, reject) =>{
        const xhr = new XMLHttpRequest()
        xhr.open("POST", requestUrl)
        xhr.responseType = 'json';
        xhr.onload = () =>{
            if (xhr.status >= 400){
                reject(xhr.response)
            }else{
                resolve(xhr.response)
            }
        }
        xhr.onerror = () => {
            reject(xhr.response)
        }
        xhr.send(JSON.stringify(body))
    })
}
export default sendRequest