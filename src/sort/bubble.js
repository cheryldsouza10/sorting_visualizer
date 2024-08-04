// import React from 'react';

//import { render } from "@testing-library/react";

// class Bubble extends React.Component(){
//     constructor(props){
//         super(props);
//     }

//     componentDidMount(){
//         // for(let i=0; i<180-1; i++){
//         //     let x=this.props.arr[i];
//         //     for(let j=i+1; j<180; j++){
//         //         if( x>this.props.arr[j] ){
//         //             let temp=x;
//         //             this.props.arr[i]=this.props.arr[j];
//         //             this.props.arr[j]=temp;
//         //         }
//         //     }
//         // }
//         console.log(this.props.arr);
//     }
// }

// export default Bubble;

export const Bubble = array => {
    const comp=[];
    if(array.length === 1) return array;

    for(let i=0; i<array.length; i++){
            let j;
            for( j=0; j<array.length-i-1; j++){
                if( array[j]>array[j+1] ){
                    comp.push([j,j+1,array[j],array[j+1]]);
                    //comp.push([j,j+1,'yellowgreen']);
                    let temp=array[j];
                    array[j]=array[j+1];
                    array[j+1]=temp;
                    //x=j;
                } else {
                    comp.push([j,j+1]);
                }
            }
            comp.push([j]);
            //comp.push([array.length-1,'yellowgreen']);
        }
    //console.log(comp);
    return comp;
};