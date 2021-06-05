
interface contractKey {
    apikey: string;
    contract: string;
}

const search: contractKey = {
    apikey: "69M5VFUAMR1TQ8F3A5I6IJ6A3SNAY1CDVP",
    contract: "0x250b211ee44459dad5cd3bca803dd6a7ecb5d46c"
}

function getHoldersList(contract: string, apikey: string) {
    let url = `https://api.bscscan.com/api?module=token&action=tokenholderlist&page=1&offset=10000`
    if (contract) {
        url += `&contractaddress=${contract}`
    }
    if (apikey) {
        url += `&apikey=${apikey}`
    }
}

getHoldersList(search.contract, search.apikey);