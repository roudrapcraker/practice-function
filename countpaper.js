function paperReqiurement(book1,book2,book3){

    const bookNo1=100*book1;
    const bookNo2=200*book2;
    const bookNo3=300*book3;

    const totalBook=book1+book2+book3;
    console.log(totalBook)

    const totalPage = bookNo1+bookNo2+bookNo3;

    return (totalPage);


}
const total= paperReqiurement(1,5,1);
console.log(total)
