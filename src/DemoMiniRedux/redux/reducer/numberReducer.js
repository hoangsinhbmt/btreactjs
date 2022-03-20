let innitialState = {
    number:10,
    people: {
    name:"Sinh",
    }
}

export let numberReducer = (state= innitialState,action)=>{
    switch(action.type){
         case "Tăng":{
             state.number+=action.payload;
             return {...state};
         }
         case "Giảm":{
            state.number-=action.payload ;
            return {...state};
        }
        default:
            return {...state};
    }
}