import React from "react";
import './ChampTable.css';

class ChampTable extends React.Component{
    constructor(props){
        super(props);
        this.state={
            mapChamps:[],
        }
    }

    componentDidMount() {
        fetch('https://dif00l.4lima.de/api/defence_api.php?action=loadMapChamps')
        .then(res => res.json())
        .then(mapChamps => this.setState({ mapChamps }))

    }

    render(){
        const {mapChamps} = this.state;
        
        return(
            <div id="ChampTable">
            {mapChamps.map((mapchamp,idx)=>{
                var style = "";// "url('https://images.4lima.de/champions/"+mapchamp.Image+".png')";
                let mapC_ID = "mapC_ID_"+this.props.ke+"_"+mapchamp.node_ID;
                return(
                    
                    <div id={mapC_ID} key={idx} style={{backgroundImage:style}}>
                        <span>{mapchamp.node_ID}</span>
                    </div>)
                })
            }
            </div>
        );
    }
}

export default ChampTable;