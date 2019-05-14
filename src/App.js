import React from 'react';
import axios from 'axios';

const client_id = "Iv1.0e5b90fc3244118b";
const client_secret = "c957b1bdc5db654a4d68cdd11d70b3f3a921b8aa";

class App extends React.Component {
  state = {
    users: [],
    loaded: false,
  }
  

  componentDidMount() {
    const fetchdata = async (user)=>{
      return axios.get(`https://api.github.com/users/${user}/repos?client_id=${client_id}&client_secret=${client_secret}`)
      .then(res=>{
     return res.data
      }).then (data=>{
         data.map(project=>{
          return axios.get(`${project.languages_url}?client_id=${client_id}&client_secret=${client_secret}`)
          .then(res=>{
            return res.data
          }).then(repos=>{
          
           console.log(repos)
            const keys = Object.keys(repos)
            // const entries = Object.entries(repos)
            console.log(...keys)
            // console.log(...entries)
            //tutaj się pogubiłem, wydaje mi się, że trzeba by było jakoś przekonwertować te objekty w tablice a potem porównać keys
        


         

          })
          
        })
        

     

      })
    }
    fetchdata('Lukasz1990') //w parametrze będzie target.value do inputa, to tylko tymczasowo :

  }
  

render() 
{
  return (
    <div className="App">
    <ul>
<li>
{this.state.users}
</li>
    </ul>
    </div>
  );
}


}





export default App;
