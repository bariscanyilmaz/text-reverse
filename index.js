module.exports=(arg)=>{
    const str= arg.toString();
    let newStr="";

    for (let index = str.length-1; index >= 0; index--) {
        newStr += str[index];
    }

    return newStr;
}