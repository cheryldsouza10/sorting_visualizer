export function getQuickSort(array){
    let low=0;
    let high=array.length-1;
    const animations=[];    
    QuickSort(array, low, high, animations);
    console.log(array);
    return animations;
}

function QuickSort(mainArray, low, high, animations){
    //console.log(mainArray, low, high);
    let len=mainArray.length;
    let j;
    if(len>1){
        j=partition(mainArray, low, high, animations);
        animations.push([j]);
        if( low<j-1 ){
            QuickSort(mainArray, low, j-1, animations);
        }
        if(j<high){
            QuickSort(mainArray, j, high, animations);
        }
    }
}

function partition(mainArray, low, high, animations){
    //console.log(mainArray, low, high);
    let pivot = mainArray[low];
    let i = low;
    let j = high;

    while(i<=j){
        while(mainArray[i]<pivot){
            animations.push([i, low]);
            //animations.push([i, low]);
            i=i+1;
        }
        while(mainArray[j]>pivot){
            animations.push([j, low])
            //animations.push([i, low]);
            j=j-1;
        }
        //console.log(i,j);
        if(i<=j){
            animations.push([i, j, mainArray[i], mainArray[j]]);
            swap(mainArray, i, j);
            //swap(mainArray, j, low);
            //return j;
            i=i+1;
            j=j-1;
        }   
        // animations.push([i, j, mainArray[i], mainArray[j]]);
        // swap(mainArray, i, j);
        // swap(mainArray, i, j);
        // swap(mainArray, j, low);

    }
    //console.log(j);
    return i;
}

function swap(mainArray, i, j){
    let temp=mainArray[i];
    mainArray[i]=mainArray[j];
    mainArray[j]=temp;
    //console.log(mainArray);
}

// export function getQuickSort(origArray, animations) {
// 	if (origArray.length <= 1) { 
// 		return origArray;
// 	} else {

// 		var left = [];
// 		var right = [];
//         var newArray = [];
//         var pivotIndex = origArray.length-1;
//         var pivot = origArray.pop();
// 		var length = origArray.length;

// 		for (var i = 0; i < length; i++) {
//             animations.push([i, pivotIndex]);
// 			if (origArray[i] <= pivot) {
//                 left.push(origArray[i]);
//                 animations.push([i, pivotIndex, origArray[i], pivot]);
// 			} else {
//                 right.push(origArray[i]);
//                 animations.push([i, pivotIndex, origArray[i], pivot])
//             }
// 		}

//         return newArray.concat(getQuickSort(left, animations), pivot, getQuickSort(right, animations));
// 	}
// }
