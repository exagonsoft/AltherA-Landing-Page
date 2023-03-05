export const shortenAddress = (address) => {
    if(address){
        return `${address.slice(0, 5)}...${address.slice(address.length-4)}`;
    }else{
        return 'Address'
    }
}