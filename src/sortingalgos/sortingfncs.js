export function bubbleanimations(arr){
    
    const animation=bsort(arr);

    return animation;
}

function bsort(arr){

const animate=[];
const n=arr.length;

for(let i=0;i<n;i++)
{
    for(let j=0;j<n-i-1;j++){
        animate.push([j,j+1]);
        animate.push([j,j+1,1]);
        if(arr[j]>arr[j+1])
        {
            let temp=arr[j];
            animate.push([j,arr[j],j+1,arr[j+1]]);
            arr[j]=arr[j+1];
            arr[j+1]=temp;
        }
    }
}
for(let k=0;k<n;k++)
animate.push([k]);

return animate;
}


export function msortanimations(arr){
    const animate=[];
    
    const n=arr.length;
    console.log(n);
    mergsort(arr,0,n-1,animate);
    for(let x=0;x<n;x++)
    animate.push([x]);

    return animate;
}

function mergehelp(ar,start,mid,end,animate)
{
    
    let i=start;
    let j=mid+1;
    let aux=[];
    let k=start;

    while(i<=mid&&j<=end){
        animate.push([i,j]);
        animate.push([i,j]);
        if(ar[i]<ar[j])
        {
            aux.push(ar[i]);   
            animate.push([k,ar[i]]);
            k++;
            i++;
        }
        else{
        aux.push(ar[j]);
        animate.push([k,ar[j]]);
        k++;

        j++;
        }
    }
    while(i<=mid)
    {
        animate.push([i,i]);
        animate.push([i,i]);
        aux.push(ar[i]);
        animate.push([k,ar[i]]);
        k++;
        i++;

    }
    
    while(j<=end){
        aux.push(ar[j]);
        animate.push([j,j]);
        animate.push([j,j]);
        animate.push([k,ar[j]]);
        k++;
        j++;
    }
    console.log("aux len",aux.length);

    
    let y=0;
    for(let x=start;x<=end;x++){
    ar[x]=aux[y];
    y++;
    console.log("ar[x]",ar[x]);
    
    }
console.log("/n");
}


function mergsort(ar,start,end,animate){
    
    
if(start<end){
    //console.log("hello",start);
    console.log("start",start);
    console.log("end",end);
    const mid=parseInt((start+end)/2);
    mergsort(ar,start,mid,animate);
    mergsort(ar,mid+1,end,animate);
    mergehelp(ar,start,mid,end,animate);
    
}

else return;


}