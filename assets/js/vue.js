const { createApp } = Vue

  createApp({
    data() {
      return {
        wines: [],
        searchArray: [],
        countries: [],
        searchKey: "",
        inputType: "",
        countrySelected: "",
      }
    },
    async mounted(){
        try{
          const res = await axios.get("libraries/controllers/getData.php");
          this.wines = res.data;
          this.searchArray = this.wines;
          const countries = [...this.searchArray].map(wine => wine.country);
          this.countries = ["Choose your country", ...new Set(countries)];
        }catch(err){
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
        if(this.countrySelected === "Choose your country" || !this.countrySelected){
          this.searchArray = [...this.wines];
        }
        this.searchArray = [...this.wines].filter(wine => wine.country === this.countrySelected);
      }

    }
  }).mount('#root')