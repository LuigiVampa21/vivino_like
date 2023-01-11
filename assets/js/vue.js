const { createApp } = Vue

  createApp({
    data() {
      return {
        wines: [],
        searchArray: [],
        countries: [],
        grapes: [],
        searchKey: "",
        inputType: "",
        countrySelected: "",
        grapeSelected: "",
      }
    },
    async mounted(){
        try{
          const res = await axios.get("libraries/controllers/getData.php");
          this.wines = res.data;
          this.searchArray = [...this.wines];

          const countries = [...this.searchArray].map(wine => wine.country);
          this.countries = ["Choose your country", ...new Set(countries)];

          const grapes = [...this.searchArray].map(wine => wine.grapes);
          this.grapes = [...new Set(grapes)].splice(3);
        }catch(err){
          console.error(err);
        }
    },
    methods: {
      removeItem(id){
        this.searchArray = [...this.searchArray].filter(wine => wine.id !== id);
      }
    },
    computed: {
      search(){
        if(!this.searchKey){
          this.searchArray = [...this.wines];
        }
        this.searchArray = [...this.wines].filter(wine => wine.name.toLowerCase().includes(this.searchKey.toLowerCase()));
      },
      countrySearch(){
        if(this.countrySelected === "" || !this.countrySelected){
          this.searchArray = [...this.wines];
        }
        this.searchArray = [...this.wines].filter(wine => wine.country === this.countrySelected);
      },
      grapeSearch(){
        if(this.grapeSelected === "" || !this.grapeSelected){
          this.searchArray = [...this.wines];
        }
        this.searchArray = [...this.wines].filter(wine => wine.grapes === this.grapeSelected);
      }
    },
  }).mount('#root')