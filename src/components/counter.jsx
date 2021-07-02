import React, { Component } from 'react';
import Slider from 'react-rangeslider'
import 'react-rangeslider/lib/index.css'; 
import './sort.css';
class Counter extends Component {

    constructor(props) {
        super(props);
       
      }

state={
    arrvals:[],
    arrnum:50

};

componentDidMount(){
    this.randarray();
}

randarray=()=> {
    let arr=[];
    this.setState({arrvals:arr});
    for(var i=0;i<this.state.arrnum;i++){
        arr.push(Math.floor(Math.random() * (600 - 20) + 20));
        this.setState({arrvals:arr});
    }

}

fnc =(j)=>{
    document.getElementsByClassName('mybars')[j].style.backgroundColor='blue';

}


sleep=(milliseconds) =>{
    const date = Date.now();
    console.log("hty");
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < milliseconds);
  }

mydelay = (j)=> {

       console.log(j);
       var timer = setTimeout(this.fnc, 1000,j);
    
}




insertionSort=()=>{
    let n=this.state.arrnum;
    let ar=this.state.arrvals;
    var i,j,k;
    const animate=[];
    // document.getElementsByClassName('mybars')[0].style.backgroundColor='red';

    for(i=0;i<n;i++)
    {   var minid=i;
        
        for(j=i+1;j<n;j++)
        { 
            //document.getElementsByClassName('mybars')[j].style.backgroundColor='blue';
            // const bar1=document.getElementsByClassName('mybars')[j];
            animate.push([j]);
            animate.push([i,j]);

            if(ar[minid]>ar[j])
            {
                
                minid=j;
                
                //document.getElementsByClassName('mybars')[i].style.backgroundColor='red';
            //     setTimeout(() =>{
                
            //   // this.sleep(100);
                
            //    bar1.style.backgroundColor='red';
            //   // document.getElementsByClassName('mybars')[i].style.backgroundColor='blue';

            //     },10*j);
            //     bar1.style.backgroundColor='blue';

            }
            
            // else{
            //     setTimeout(() =>{
                
            //         // this.sleep(100);
                      
            //          bar1.style.backgroundColor='red';
            //         // document.getElementsByClassName('mybars')[i].style.backgroundColor='blue';
      
            //           },10*j);
            // }


            
            


        }
        animate.push([i,minid,ar[minid],ar[i]]);
        var tmp=ar[i];
        var comp1=document.getElementsByClassName('mybars')[i];
        var comp2=document.getElementsByClassName('mybars')[minid];



        
        
        //comp1.style.height=`${ar[minid]}px`;
        
        
        ar[i]=ar[minid];
        //console.log(document.getElementsByClassName('mybars')[i].style.height);
       
       // comp2.style.height=`${tmp}px`;
       
       
        ar[minid]=tmp;
        // setTimeout(() =>{
        

        //     comp1.style.height=`${ar[minid]}px`;
        //     ar[i]=ar[minid];
        //     //console.log(document.getElementsByClassName('mybars')[i].style.height);
        //     comp2.style.height=`${tmp}px`;
        //     ar[minid]=tmp;
        // },10*i
        // );
    }

    for(i=0;i<n;i++)
    {
        animate.push([i,i,i]);
    }

    return animate;
}



animateinsertion=()=>{
    const animations=this.insertionSort();
    for(var w=0;w<animations.length;w++){
        console.log("anim",animations[w][0]);
    }
    
    let j=0;
    let n=this.state.arrnum;
    let myar=this.state.arrvals;
    let q=2*(n-1);
    
    for(let i=0;i<animations.length;i++)
    {
        const arrayBars=document.getElementsByClassName('mybars');
        
            if(animations[i].length===4){
                // j++;
                // q+=2*(n-1-j);
                // console.log("swappp");
                setTimeout(() => {
                    const [barOneIdx, newHeightidx,newHeight,bar1h] = animations[i];
                   // console.log("n swap",barOneIdx,newHeightidx);
                    const barOneStyle = arrayBars[barOneIdx].style;
                    const temp= bar1h; //barOneStyle.height;

                    barOneStyle.height = `${newHeight}px`;
                    //console.log("check ",arrayBars[newHeightidx].style.height,newHeight);
                    arrayBars[newHeightidx].style.height= `${temp}px`;
                    

                  }, i * 10);
                //swap
            }
            else{

               // console.log("n",barOneIdx,barTwoIdx);
               if(animations[i].length===3){
                const [greenbar] = animations[i]; 
                setTimeout(() => {
                    arrayBars[greenbar].style.backgroundColor = "green";
                    
                  }, i * 10);

               }




                else if(animations[i].length===1){
                    const [barOneIdx] = animations[i];
                    const barOneStyle = arrayBars[barOneIdx].style;
                
                    setTimeout(() => {
                        barOneStyle.backgroundColor = "red";
                        
                      }, i * 10);
                }
                else{ 
                const [barOneIdx, barTwoIdx] = animations[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
                    setTimeout(() => {
                        barOneStyle.backgroundColor = "blue";
                        barTwoStyle.backgroundColor = "blue";
                      }, i * 10);
                }
            }

        
    }


    // for(let x=0;x<n;x++){
    //     const arrayBars=document.getElementsByClassName('mybars');
    //     setTimeout(() => {
    //         arrayBars[x].style.backgroundColor = "green";
            
    //       }, x * 10);
    // }

}


handleChangeNo = value => {
    this.setState({
      arrnum: value
    })
    this.randarray();
  };


    render() {
        const arrvals=this.state.arrvals;
        const arrnum=this.state.arrnum;
        return(  
        
        <React.Fragment>

       <div className="allbtns">
        <button onClick={this.randarray}  >Reset</button> 
        <button onClick={this.animateinsertion}  >Insertion sort</button> 
        <div className='slider'>
        <Slider
          min={20}
          max={200}
          value={arrnum}
         
          onChange={this.handleChangeNo}
          
        />
      {arrnum}
      </div>

        </div>
        <div className="allbars">
        {arrvals.map((val,i)=>
        <div className="mybars" style={ {height:val,width:1000/arrnum}} key={i}> </div>
        )

        }
        </div>

       
        </React.Fragment>
        );
    }
}

export default Counter;