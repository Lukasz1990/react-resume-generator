import React from 'react';
import axios from 'axios';
import './App.css';


class App extends React.Component {
  state = {
    users: [],
    error: false,
  }


  componentDidMount() {
    const fetchdata =  async (user)=>{
      return axios.get(`https://api.github.com/users/${user}/repos`)
      .then(res=>{
return res.data;
      }).then (data=>{
        console.log(data)
         return data.map(project=>{
         return project.name
        })    
       }).then(res=>{
        res.forEach(name => {
       
                  axios.get (`https://api.github.com/repos/Lukasz1990/${name}/languages`).then(res=>{
                
                    return res.data                            
        })
      })
    }).then(res=>{
      console.log(res)
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
