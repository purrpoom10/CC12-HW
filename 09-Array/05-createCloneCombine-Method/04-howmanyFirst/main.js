function first(arr,n){
    if(n==undefined||n==1){
        return arr.slice(0,1)
    }
    else{
        return arr.slice(0,n)
    }
}