//Dynamic   classes
class Comment {
    constructor(Commenttext) {
        this.text = Commenttext,
        this.likesQuantity = 0
    } 
    addLike(){
        this.likesQuantity += 1
    }
    
    static mergeComments(firstComment, secondComment) {
        return `${firstComment}, ${secondComment}`
    }
}

const firstComment = new Comment('This is comment');
const secondComment = new Comment('This is comment 2');

//console.log(firstComment)

//console.log(firstComment.text)
firstComment.addLike();
secondComment.addLike();
console.log(`first commen likes Quantity: ${firstComment.likesQuantity}`)
console.log(`second commen likes Quantity: ${secondComment.likesQuantity}`)

firstComment.addLike();
secondComment.addLike();
console.log(`first commen likes Quantity: ${firstComment.likesQuantity}`)
console.log(`second commen likes Quantity: ${secondComment.likesQuantity}`)


secondComment.addLike();
console.log(`first commen likes Quantity: ${firstComment.likesQuantity}`)
console.log(`second commen likes Quantity: ${secondComment.likesQuantity}`)

let mergeComments = Comment.mergeComments(firstComment.text, secondComment.text);

console.log(mergeComments);



