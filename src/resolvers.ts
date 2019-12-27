const Mutation = {
    createStudent:(root,args,context,info) => {
        console.log("test mutation");
        
    }
 }
 const Query = {
    testMessage:() => "hello"
 }
 
export default {Query, Mutation}