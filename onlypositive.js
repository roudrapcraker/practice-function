const value = [45,87,96,11,63,-56,71,28];
function onlyPositive(num){
    let positive=[];
    for(let i=0;i<num.length;i++)
    {
        const element=num[i];
        if(element>=0)
        {
            positive.push(element);
        }
        else{
            break;
        }
    }
    return positive;
}
const positiveVelue=onlyPositive(value);
console.log(positiveVelue);