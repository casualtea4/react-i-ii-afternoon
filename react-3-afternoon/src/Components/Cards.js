import React, {Component} from 'react'

class Card extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className='Card'>
                <h1 className="Name">
                    {this.props.person.name.first} {this.props.person.name.last}
                </h1>
                <h2>From:
                    {this.props.person.city}
                </h2>
                <h2>Job Title:
                    {this.props.person.title}
                </h2>
                <h2>Employer:
                    {this.props.person.employer}
                </h2>
                <h2>Favorite Movies:
                    {this.props.person.favoriteMovies.map(e=><p key={e}>{e}</p>)}
                </h2>
            </div>
        )
    }
}

export default Card