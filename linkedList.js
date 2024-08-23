

class Node{
    constructor(value=null,next=null){
        this.value=value;
        this.next=next;
    }

}


class linkedList{
    constructor(list){
        this.tail=new Node(list[-1],null);
    }
}

a=new Node(10,null);
b=new Node(20,a);

console.log(b)