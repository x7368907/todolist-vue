import {createStore} from 'vuex';

const store = createStore({
    state(){
        return {
            newListItems:[],
            newItem:'',
        };
    },
    mutations:{
        addItem(state, newItem) {
            if(newItem.trim() !== '') {
                state.newListItems.push(newItem);
                state.newItem = '';
            }
            
        },
        removeItem(state,index){
            state.newListItems.splice(index,1);
        }
    },
    actions:{
        addItem({commit},newItem) {
            commit('addItem',newItem.trim());
        },
        removeItem({ commit }, index) {
            commit('removeItem', index);
          },
      
    },
    getters:{
        getDate(){
            let today = new Date();
            let options = {
                weekday:"long",
                day:"numeric",
                month:"long"
            };
            return today.toLocaleDateString("en-US", options)
        },
        getNewListItems(state) {
            return state.newListItems;
          }
    }
});

export default store;