<div class="lobby-container">
  <ul>
    <li class="name" @click="inputType = 'name'">
      <i class="fas fa-search"></i>
      <input v-if="inputType === 'name'" @change="search" v-model="searchKey" type="search" class="search" placeholder="Entrez le nom d'un vin...">
    </li>

    <li class="country"  @click="inputType = 'country'">
      <i class="fas fa-globe-europe"></i>
      <select v-if="inputType === 'country'" v-model="countrySelected" @change="countrySearch">
        <option v-for="country in countries" :key="country" :value="country">{{country}}</option>
      </select>
    </li>

    <li class="grapes" @click="inputType = 'grapes'">
      <i class="fas fa-wine-glass-alt"></i>
      <div v-if="inputType === 'grapes'" class="radio-container">
      <div class="radio" v-for="grape in grapes" :key="grape">
        <label :for="grape">{{grape}}</label>
        <input v-model="grapeSelected" @click="grapeSearch" type="radio" name="grape" :id="grape" :value="grape" class="radio-button">
      </div>  
      </div>
    </li>
  </ul>

  
  <h1 v-if="!inputType" class="title" >Wine List</h1>
  <h3 v-if="!searchArray.length">No wine found with that search. Please try again</h3>
  <div class="list-container">

    <div v-for="wine in searchArray" :key="wine.id" class="wine-list">
      <div class="wine-card">
        <div class="card-header">
          <h2>{{wine.name}}</h2>
          <i @click="removeItem(wine.id)" class="fas fa-times"></i>
        </div>
        <div class="container">
          <div class="text-container">
            <div class="buttons">
              <h4>{{wine.year}}</h4>
              <h4>{{wine.country}}</h4>
              <h4>{{wine.grapes}}</h4>
            </div>
            <div class="location">
              <i class="fas fa-map-marker-alt"></i>
              <span>{{wine.region}}</span>
            </div>
            <p>{{wine.description}}</p>
          </div>
          <img :src=`./assets/uploads/${wine.picture}` alt="wine bottle">
        </div>

      </div>
    </div>
  </div>
</div>