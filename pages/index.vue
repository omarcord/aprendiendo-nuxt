<template>
<div>
   
    <h1>Hola {{msg}}</h1>
    <input type="text" v-model="msg">
    <button @click="guardar"
    class="btn btn-primary">Guardar</button>
    <b-button variant="primary">Guardar</b-button>
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
 import navbar from '../components/navbar'
 //import contacto from './contacto'

 export default {
     components: { navbar },
     data() {
         return {
             msg:"Omar Cordoba",
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
 