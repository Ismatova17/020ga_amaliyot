const initObuv = {
    card: []
}

function useObuvCard(state = initObuv, action){
    if(action.type == 'draw'){
        let currentMassiv = [...state.card]
        currentMassiv.push(action.payload.mass)

       let yangi = {
        ...state , 
        card: currentMassiv

       }
       state = yangi
       return state 
       
    }
       return state
}

export {useObuvCard}