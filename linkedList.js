

class Node{
    constructor(value=null,next=null){
        this.value=value;
        this.next=next;
    }

}


class linkedList{
    constructor(){
        this.tail=null;
        this.head=null;
        this.length=0;
    }

    append(value){
        const newNode = new Node(value);
        if (!this.head){
            this.head=newNode;
            this.tail=newNode;
        }
        else{
            this.tail.next=newNode;
            this.tail=newNode;
        }
        this.length++;

    }

    prepend(value){
        if(!this.head){
            const newNode = new Node(value);
            this.head=newNode;
            this.tail=newNode;
        }
        else{
            const newNode = new Node(value, this.head);
            this.head=newNode;
        }
        this.length++;
    }

    size(){
        return(this.length);
    }

    head(){
        return(this.head);
    }

    tail(){
        return(this.tail)
    }

    at(index){
        if (index>this.length){
            return(null);
        }
        else{
            let currentNode=this.head;
            for(let i=0; i<index; i++){
                currentNode=currentNode.next;
            }
            return(currentNode)
        }
    }

    pop(){
        if (this.length>0){
            if (this.length==1){
                this.tail=null;
                this.head=null
            }
            else{
                this.at(this.length-2).next=null;
                this.tail=this.at(this.length-2);
            }
            this.length--;
        } 
    }

    contains(value){
        if (this.length==0){
            return(false);
        }
        else{
            for(let i=0; i<this.length; i++){
                if (this.at(i).value==value){
                    return(true);
                }
            }
            return(false)
        }
    }


    find(value){
        if (this.length==0){
            return(null);
        }
        else{
            for(let i=0; i<this.length; i++){
                if (this.at(i).value==value){
                    return(i);
                }
            }
            return(null);
        }
    }

    toString(){
        if (this.length==0){
            return(` ( ${this.head.value} ) -> ( null) `);
        }
        else{
            let string='';
            for (let i=0; i<this.length; i++){
                string=string+` ( ${this.at(i).value} ) ->`;
            }
            return(string+' null');
        }
    }

    insertAt(value,index){
        if (index<this.length){
            const newNode= new Node (value, this.at(index));
            if (index==0){
                this.head=newNode;
            }
            else{
                this.at(index-1).next=newNode;
            }
            this.length++;
        }
    }

    removeAt(index){
        if (index<this.length){
            if (index==0){
                if (this.length>1){
                    this.head=this.at(index+1);
                }
                else{
                    this.head=null;
                    this.tail=null;
                }
            }
            else{
                if (index==this.length-1){
                    this.at(index-1).next=null;
                    this.tail=this.at(index-1);
                }
                else{
                    this.at(index-1).next=this.at(index+1);
                }  
            }
            this.length--;
        }
    }
}

const list = new linkedList();

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");



console.log(list.toString());