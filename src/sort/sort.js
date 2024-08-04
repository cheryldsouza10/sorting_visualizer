import React from 'react';
import './sort.css';
import * as Bubble from './bubble';
import * as Merge from './merge';
import * as Quick from './quick';

class Sort extends React.Component{
    constructor(props){
        super(props);
        this.state = { arr:[], n:1 };
        //this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount(){
        this.initialize();
    }

    initialize(){
        const arr=[];
        //const arr2=[];
        for(let i=0; i<180; i++){          
            arr.push(Math.floor(Math.random() * (500-5+1) + 5) );
            //arr2.push(Math.floor(Math.random() * (100-5+1) + 5) );
        }
        this.setState({arr});
        //this.setState({arr2});
        console.log(arr);
        //console.log(arr2);
    }

    // bubbleSort(){
    //     const sort = Bubble.Bubble(this.state.arr);
    //     const comp=[];
    //     comp.push(sort[0]);
    //     comp.push(sort[0]);
        
    //     //console.log(comp);
    //     // for(const animate of sort){
    //     //     animations.push(animate);
    //     //     animations.push(animate[0]);
    //     //     // animations.push(animate[1]);
    //     //     console.log(animations);
    //     // }
    //     for(let i=0; i<comp.length-1; i++){
    //         const bar = document.getElementsByClassName('bars')
    //         const a = comp[i][0];
    //         const b = comp[i][1];
    //         //console.log(a,b);
    //         const barStyle1 = bar[a].style;
    //         const barStyle2 = bar[b].style;
    //         const color=(i%3!==2);
    //         if(color){
    //             const c= i%3===0 ? 'red':'yellowgreen';
    //             setTimeout(()=>{
    //                 barStyle1.backgroundColor='red';
    //                 barStyle2.backgroundColor='red';
    //             },i*20)
    //         } else {
    //             setTimeout(()=>{
    //                 barStyle1.backgroundColor='yellow';
    //                 barStyle2.backgroundColor='yellow';
    //             },(i-1)*10)
    //         }
    //     }

    // }

    bubbleSort(){
        const sort =  Bubble.Bubble(this.state.arr);
        //const sort =  Bubble.Bubble(this.state.arr2);
        const animations = sort;

        for (let i = 0; i < animations.length; i++) {
            const arrayBars = document.getElementsByClassName('bars');
            //const arrayBars = document.getElementsByClassName('bars2');

            if(animations[i].length === 4){
                //swapped
                const [idx1, idx2, h1, h2] = animations[i];
                const barOneStyle = arrayBars[idx1].style;
                const barTwoStyle = arrayBars[idx2].style;
                setTimeout(() => {
                    barOneStyle.height = `${h2}px`;
                    barTwoStyle.height = `${h1}px`;
                    barOneStyle.backgroundColor = 'yellowgreen';
                    barTwoStyle.backgroundColor = 'red';

                  }, i * 10);
            } else if(animations[i].length === 1){
                const idx = animations[i][0];
                const barOneStyle = arrayBars[idx].style;
                //const last = arrayBars[this.state.arr.length-1-i]

                setTimeout(() => {
                    //last.style.backgroundColor = 'purple';
                    barOneStyle.backgroundColor = 'purple';
                }, i * 10);
            } 
            else {
                //compared
                const [idx1, idx2,c] = animations[i]
                const barOneStyle = arrayBars[idx1].style;
                const barTwoStyle = arrayBars[idx2].style;

                setTimeout(() => {
                    barOneStyle.backgroundColor = 'yellowgreen';
                    barTwoStyle.backgroundColor = 'yellowgreen';
                }, i * 10);
            }
        }
    }

    mergeSort(){
        const animations =  Merge.getMergeSortAnimations(this.state.arr);
        // for(let i=0; i<sort.length; i=i+3){
        //     let j=i+1;
        //     let k=i+2;
        //     //console.log(sort[j],sort[k]);
        //     const arrayBars = document.getElementsByClassName('bars');
        //         const [idx1, idx2] = sort[i];
        //         const barOneStyle = arrayBars[idx1].style;
        //         const barTwoStyle = arrayBars[idx2].style;

        //         const [id1, id2] = sort[j];
        //         const barOne = arrayBars[id1].style;
        //         const barTwo = arrayBars[id2].style;

        //         const [id, h] = sort[k];
        //         const barNew = arrayBars[id].style;

        //         setTimeout(() => {
        //             barOneStyle.backgroundColor = 'red';
        //             barTwoStyle.backgroundColor = 'red';

        //             setTimeout(() => {
        //                 barOne.backgroundColor = 'yellowgreen';
        //                 barTwo.backgroundColor = 'yellowgreen';
        //             }, i*5)

        //             setTimeout(() => {
        //                 barNew.height = `${h}px`;
        //             }, i*5)


        //           }, i*10);
        // }
        //const animations = getMergeSortAnimations(this.state.array);
        for (let i = 0; i < animations.length; i++) {
          const arrayBars = document.getElementsByClassName('bars');
          const isColorChange = i % 3 !== 2; //every third entry is for swap
          if (isColorChange) {
            const [barOneIdx, barTwoIdx] = animations[i];
            const barOneStyle = arrayBars[barOneIdx].style;
            const barTwoStyle = arrayBars[barTwoIdx].style;
            const color = i % 3 === 0 ? 'red' : 'yellowgreen';  //first entry for compare
            setTimeout(() => {
              barOneStyle.backgroundColor = color;
              barTwoStyle.backgroundColor = color;
            }, i * 10);
          } else {
            setTimeout(() => {
              const [barOneIdx, newHeight] = animations[i];
              const barOneStyle = arrayBars[barOneIdx].style;
              barOneStyle.height = `${newHeight}px`;
            }, i * 10);
          }
        }
    } //end of merge sort

    quickSort(){
        const animations =  Quick.getQuickSort(this.state.arr);
        //console.log(animations);
        for (let i = 0; i < animations.length; i++) {
            const arrayBars = document.getElementsByClassName('bars');
            //const arrayBars = document.getElementsByClassName('bars2');

            if(animations[i].length === 2){
                //comparing
                const [idx1, idx2] = animations[i]
                const barOneStyle = arrayBars[idx1].style;
                const barTwoStyle = arrayBars[idx2].style;

                setTimeout(() => {
                    barOneStyle.backgroundColor = 'red';
                    barTwoStyle.backgroundColor = 'red';
                    setTimeout(()=>{
                        barOneStyle.backgroundColor = 'yellowgreen';
                        barTwoStyle.backgroundColor = 'yellowgreen';
                    }, i)
                }, i*10);
            }
            else if(animations[i].length === 4){
                //swapped
                const [idx1, idx2, h1, h2] = animations[i];
                const barOneStyle = arrayBars[idx1].style;
                const barTwoStyle = arrayBars[idx2].style;
                setTimeout(() => {
                    barOneStyle.height = `${h2}px`;
                    barTwoStyle.height = `${h1}px`;
                    barOneStyle.backgroundColor = 'yellowgreen';
                    barTwoStyle.backgroundColor = 'yellowgreen';

                  }, i*10);
            } else {
                const idx = animations[i][0];
                const barOneStyle = arrayBars[idx].style;

                setTimeout(() => {
                    //barOneStyle.backgroundColor = 'purple';
                    barOneStyle.backgroundColor = 'yellowgreen';
                }, i * 10);
            } 
        }

    }


    render(){
        return(
            <div className="container">
                <div className="sortBars">
                {this.state.arr.map( (value,index) => (
                    <div className="bars" style={{height:`${value}px`, backgroundColor: 'yellowgreen'}} key={index}></div>
                ))} <br/>

                {/* {this.state.arr.map( (value,index) => (
                    <div className="bars2" style={{height:`${value}px`, backgroundColor: 'yellowgreen'}} key={index}></div>
                ))} <br/>

                {this.state.arr.map( (value,index) => (
                    <div className="bars3" style={{height:`${value}px`, backgroundColor: 'yellowgreen'}} key={index}></div>
                ))} <br/> */}
                </div> <br/>

                <button onClick={()=>this.initialize()}> New Array </button>
                <button onClick={()=>this.bubbleSort()}> Bubble Sort </button>
                <button onClick={()=>this.mergeSort()}> Merge Sort </button>
                <button onClick={()=>this.quickSort()}> Quick Sort </button>
            </div>
        )

    }
}

export default Sort;

// Plurasight
// encoder decoder
// software
// covert n2 to nlogn
