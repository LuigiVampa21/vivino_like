// const vue = new Vue({
//     async mounted(){
//         try{
//             const res = await axios.get("libraries/controllers/getData.php");
//             console.log(res);
//         }catch(err){
//             console.error(err);
//         }
//     }


  const { createApp } = Vue

  createApp({
    async mounted(){
        try{
          const res = await axios.get("libraries/controllers/getData.php");
          console.log(res);
        }catch(err){
        }
    },
    data() {
      return {
        message: 'Hello Vue!'
      }
    }
  }).mount('#root')