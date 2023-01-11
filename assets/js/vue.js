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
    data() {
      return {
        wines: []
      }
    },
    async mounted(){
        try{
          const res = await axios.get("libraries/controllers/getData.php");
          this.wines = res.data;
        }catch(err){
        }
    },
    methods: {
      removeItem(id){
        // this.$delete(this.wines, id);
        this.wines = [...this.wines].filter(wine => wine.id !== id);
      }
    },
  }).mount('#root')