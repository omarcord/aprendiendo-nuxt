<template>
<div>
    <h1>Hola {{msg}}</h1>
    <input type="text" v-model="msg">
    <button @click="guardar">Guardar</button>
    <table>
        <tr>
            <th>Nombre</th>
        </tr>
        <tr v-for="(item,index) in municipios" :key="index">
            <td>{{ item }}</td>
        </tr>
    </table>

</div>

 </template>nuxt 

 <script>
 export default {
     data() {
         return {
             msg:"ING. Omar Cordoba",
             municipios: ['Mocoa','Villagarzon', 'Pto Asis']
         }

     },
     methods: {
         guardar(){
             //alert("gaurdando...") para ver cque funciona ese hp boton
             this.municipios.push(this.msg)
             this.msg = ''
         }
     }
 }
 </script>
 