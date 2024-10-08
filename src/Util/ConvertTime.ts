function ConvertDateTime(time:Date) {
    const day = time.getDate();
    const month = time.getMonth();
    const year=time.getFullYear();
    return year+"/"+month+"/"+day;
}
export default ConvertDateTime;