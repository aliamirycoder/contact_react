import React, {Fragment} from 'react';

class  Car extends React.Component{
    constructor(props) {
        super(props);
        this.state = {favoritecolor: "blue"};
    }
    showalert = (event) =>{
        this.props.showalert(event.target.value);
    }
    render() {
        return (
            <React.Fragment>
                <li><input type="checkbox" onChange={ () => this.props.cheakchange(this.props.id)} value={this.props.cheaked} />
                نام :
                    {this.props.content}
                    «»
                شماره تماس :
                    {this.props.tell}

                </li>
            </React.Fragment>
        )
    }

}

export default Car
