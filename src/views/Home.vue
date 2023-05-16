<template>
    <div class="box" id="heading">
      <h1>{{ getDate}}</h1>
  
      <div class="box">
        <div v-for="item in getNewListItems" :key="item.id" class="item">
          <input type="checkbox" :id="'item-' + item.id" @change="deleteItem(item.id)">
          <p>{{ item }}</p>
         
        </div>
      </div>
  
      <form class="item" @submit.prevent="addNewItem">
        <input type="text" v-model="newItem" placeholder="New Item" autocomplete="off">
        <button type="submit">+</button>
      </form>
    </div>
   
  </template>
  
  <script>
  import { mapGetters, mapActions } from 'vuex';
  export default {
   computed:{
   ...mapGetters(['getNewListItems','getDate']),
   },
    data (){
        return{
            newItem:'',
        }
    },
    methods: {
        ...mapActions(['addItem','removeItem']),
       addNewItem(){
        if (this.newItem.trim() !== ""){
            this.addItem(this.newItem.trim());
            this.newItem = "";
        }
       },
       deleteItem(id) {
        this.removeItem(id);
       } 
      
 
    }
  };
  </script>
  
  <style>
 html {
  background-color: #E4E9FD;
  background-image: -webkit-linear-gradient(65deg, #A683E3 50%, #E4E9FD 50%);
  min-height: 1000px;
  font-family: 'helvetica neue';
}

h1 {
  color: #fff;
  padding: 10px;
}

.box {
  max-width: 400px;
  margin: 50px auto;
  background: white;
  border-radius: 5px;
  box-shadow: 5px 5px 15px -5px rgba(0, 0, 0, 0.3);
}

#heading {
  background-color: #A683E3;
  text-align: center;
}

.item {  

  min-height: 70px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #F1F1F1;
  background-color: #fff;

}

.item:last-child {
  border-bottom: 0;
}

input:checked+p {
  text-decoration: line-through;
  text-decoration-color: #A683E3;
}

input[type="checkbox"] {
  margin: 20px;
}

p {
  margin: 0;
  padding: 20px;
  font-size: 20px;
  font-weight: 200;
  color: #00204a;
}

form {
  text-align: center;
 
}

button {
  min-height: 50px;
  width: 50px;
  border-radius: 50%;
  border-color: transparent;
  background-color: #A683E3;
  color: #fff;
  font-size: 30px;
  padding-bottom: 6px;
  border-width: 0;
}

input[type="text"] {
  text-align: center;
  height: 60px;
  top: 10px;
  border: none;
  background: transparent;
  font-size: 20px;
  font-weight: 200;
  width: 313px;
}

input[type="text"]:focus {
  outline: none;
  box-shadow: inset 0 -3px 0 0 #A683E3;
}

::placeholder {
  color: grey;
  opacity: 1;
}

footer {
  color: white;
  color: rgba(0, 0, 0, 0.5);
  text-align: center;
}

  </style>
 
  
 
  
  
  
  
  
  
  
