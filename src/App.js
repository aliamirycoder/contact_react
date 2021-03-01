import React, {Fragment} from 'react';
import Car from "./Car";
import UUID from 'uuid/dist/v1';
import User from './user1'

var test = new Car();
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
           list : [],
           name : '',
           tell:'',
           cheack : false,
        }
    }
    nameHandel = (e) =>{

        this.setState({
            name : e.target.value,
        })
    }
    telHandel = (e) =>{
        this.setState({
            tell : e.target.value,
        })
    }

    submithandel = (event) => {
        event.preventDefault();
        var input_value = document.getElementById('input_value').value;
        if (input_value != "") {
            let newlist = {
                key: UUID(),
                name: this.state.name,
                tell: this.state.tell,
                cheaked: false
            }
            this.setState({
                name: '',
                tell:'',
            })
            this.state.list.push(newlist)

        }
    }
    chakedupdate = (event) =>{
        this.setState((prestate) =>{
            prestate.list.map((row)=>{
                if (row.key==event){
                    row.cheaked = !row.cheaked;
                }
            })
        })
        let index = this.state.list.findIndex(list => list.key === event);
        var text = this.state.list[index].name;
        if (this.state.list[index].cheaked != true){
          alert(" شما "+text+"را انجام دادید " )
        }
        else {
            console.log(this.state.list[index].checke)
        }


    }
    render() {
        const list_show = this.state.list.map((row) => {
            return(
                <Car id={row.key} key={row.key} cheaked={row.cheaked} tell={row.tell} content={row.name} cheakchange={this.chakedupdate}/>
            )
        })
        return (
          <React.Fragment>

              <form onSubmit={this.submithandel}>
                  نام :
                  <input type="text" onChange={this.nameHandel} id="input_value" value={this.state.name}/>
                  <br/>
                  شماره :
                  <input type="text" onChange={this.telHandel} id="input_value" value={this.state.tell}/>
                  <br/>
                  <button type="submit">ثبت </button>
                  {list_show}
              </form>
          </React.Fragment>
        );
    }
}


export default App