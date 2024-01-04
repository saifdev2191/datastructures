// https://www.codingninjas.com/studio/problems/sort-linked-list-of-0s-1s-2s_1071937?utm_source=striver&utm_medium=website&utm_campaign=a_zcoursetuf

const sortLl = (N, head) => {
    const zerosLLHead = {
        value: -1,
        next: null
    }
    let tempZero = zerosLLHead
    const onesLLHead = {
        value: -1,
        next: null
    }
    let tempOne = onesLLHead
    const twosLLHead = {
        value: -1,
        next: null
    }
    let tempTwo = twosLLHead
    let temp = head
    while(temp){
        if(temp.value === 0){
            tempZero.next = temp
            tempZero = tempZero.next;
            
        }
        if(temp.value === 1){
            tempOne.next = temp
            tempOne = tempOne.next
        }
         if(temp.value === 2){
            tempTwo.next = temp
            tempTwo = tempTwo.next
        }
        if(!temp.next){
            tempZero.next = null
            tempOne.next = null
            tempTwo.next = null
        }
        temp = temp.next
    }
    
    // link all the ll
    tempZero.next = onesLLHead.next;
    tempOne.next = twosLLHead.next
    return zerosLLHead.next
}