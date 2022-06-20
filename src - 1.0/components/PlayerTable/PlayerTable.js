import React from "react";
import './PlayerTable.css';

class PlayerTable extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            players:[], 
            ps:"test",
            champs:[],           
        }
        
    }

    
    componentDidMount() {
        var selectedKE = this.props.ke;
        var schwelle = parseInt(this.props.schwelle);
        fetch('https://dif00l.4lima.de/api/defence_api_test.php?action=loadPlayer&ke='+selectedKE)
        .then(res => res.json())
        .then(players => this.setState({ players }))
        var z = 0;              
        
            setTimeout(function(){},1000)
            fetch('https://dif00l.4lima.de/api/defence_api_test.php?action=allprio&ke='+selectedKE+"&schwelle="+schwelle)
            .then(res => res.json())
            .then(champs => this.setState({ champs }))
            .then(                
                champ=>{
                    var temp = "";
                    const {champs} = this.state;
                    var totalKE = 0;
                    var merkchamp = 0;
                    var node = selectedKE+"-52";
                   
                    champs.map((champ,index)=>{
                        var pt ="";
                        pt = document.querySelector("#PlayerTableKE"+selectedKE+">tbody").innerHTML;
                                
                                          node = selectedKE+"-"+champ.node_ID;
                          console.log(node);
                        if( champ.ke === selectedKE){ 
                            //temp = "";//"("+champ.champion_ID+","+champ.node_ID+","+champ.champion_pi+")";
                            var i = document.createElement("DIV");                           
                            i.style.backgroundImage = "url('https://images.4lima.de/champions/"+champ.Image+".png')";
                            i.alt = "";
                           //i.title = temp;
                            i.id = champ.ke+"_"+champ.node_ID+"_"+champ.champion_ID+"_";
                            i.setAttribute('champion_ID',champ.champion_ID);
                            i.setAttribute('node_ID',selectedKE+"-"+champ.node_ID);
                            i.addEventListener('click',function(){var title=this.title;alert(title);})
                            var s = document.createElement("SPAN");
                            s.innerText = champ.node_ID;
                            s.style.color = "#FFF";
                            s.style.lineHeight = "5.5";
                            s.style.fontWeight = "bold";
                            s.style.fontSize = "12pt";
                            s.style.backgroundColor = "#000";
                            s.style.padding = "1px 1px";
                            
                            i.append(s);
                            
                           

                           
                            
                           // this.log(champ.node_ID,selectedKE,"<div>Prüfung Knoten: "+champ.node_ID+" KE:"+selectedKE+"<div>");
                           // this.log(champ.node_ID,selectedKE,"Knoten schon besetzt?: node_id="+selectedKE+"-"+champ.node_ID+'" Ergebnis: '+pt.indexOf('node_id="'+selectedKE+"-"+champ.node_ID+'"'));  
                            
                            if( pt.indexOf('node_id="'+selectedKE+"-"+champ.node_ID+'"') === -1  ){   
                              //  this.log(champ.node_ID,selectedKE,"Knoten ist frei!: node_id="+selectedKE+"-"+champ.node_ID+"'");

                                //this.log(champ.node_ID,selectedKE,"Champion PI >10.000?: champion_id="+champ.champion_ID+" Ergebnis: champion_pi="+champ.champion_pi); 
                                if( parseInt(champ.champion_pi) > schwelle){ 

                               // this.log(champ.node_ID,selectedKE,"Champion already in use?: champion_id="+champ.champion_ID+'" Ergebnis: '+pt.indexOf('champion_id="'+champ.champion_ID+'"') ) ;                              
                                if( pt.indexOf('champion_id="'+champ.champion_ID+'"') === -1){    
                                 //   this.log(champ.node_ID,selectedKE,"Champion ist noch unbenutzt!: champion_id="+champ.champion_ID+'" '+champ.Name );                
                               
                                   // this.log(champ.node_ID,selectedKE,"Hat bester Spieler/Champ schon 5 Champs? "+document.getElementById('champPlayer_'+champ.allianz_member_ID).children.length);
                                    if( document.getElementById('champPlayer_'+champ.allianz_member_ID).children.length  < 5){
                                     //   this.log(champ.node_ID,selectedKE,"Bester Spieler/Champ hat noch keine 5 Champs!");
                                        var iHTML = document.getElementById('champPlayer_'+champ.allianz_member_ID).innerHTML;
                                        
                                        //this.log(champ.node_ID,selectedKE,'Hat der Spieler bereits den Champ? champion_id="'+champ.champion_ID+'" '+iHTML.indexOf('champion_id="'+champ.champion_ID+'"'));
                                        if( iHTML.indexOf('champion_id="'+champ.champion_ID+'"') === -1 ){
                                            this.log(champ.node_ID,selectedKE,'Spieler hat den Champ noch nicht!, wird gesetzt!'); 
                                            temp +=  champ.Name+"("+champ.champion_pi+") von "+champ.Spielername+": Champ wird gestellt\r\n";
                                            console.log(champ.Name+"("+champ.champion_pi+") von "+champ.Spielername+": Champ wird gestellt");
                                            i.title = temp;
                                            document.getElementById('champPlayer_'+champ.allianz_member_ID).append(i);                                               
                                            z++;
                                            document.getElementById('counter_'+this.props.ke).innerHTML = z+" Champs";
                                            totalKE += parseInt(champ.champion_pi);
                                            temp="";
                                            
                                            
                                            if(document.getElementById("mapC_ID_"+champ.ke+"_"+champ.node_ID)){
                                             this.log(champ.node_ID,selectedKE,champ.node_ID+" aus der Liste entfernen!")
                                                document.getElementById("mapC_ID_"+champ.ke+"_"+champ.node_ID).remove();
                                            }         
                                            
                                        }
                                                            
                                   
                                    }else{
                                        this.log(champ.node_ID,selectedKE,"Spieler/Champ hat bereits 5 Champs!: Spieler_ID:"+champ.allianz_member_ID) 
                                        temp += champ.Name+"("+champ.champion_pi+") von "+champ.Spielername+": Es sind bereits 5 Champs zugeteilt\r\n"; 
                                    
                                    } 
                                }else{
                                   
                                        this.log(champ.node_ID,selectedKE,"Champ bereits vorhanden!: "+champ.champion_ID+""+champ.Name) 
                                        temp +=  champ.Name+"("+champ.champion_pi+") von "+champ.Spielername+": Champ bereits vorhanden \r\n";
                                      
                                   
                                }
                            }else{
                                if( merkchamp === ""){
                                    merkchamp = i;
                                }
                               
                                this.log(champ.node_ID,selectedKE,"Champ zu klein!: "+champ.champion_ID+"-"+champ.Name+": "+champ.champion_pi);  
                                this.log(champ.node_ID,selectedKE,champ.Name+"("+champ.champion_pi+") von "+champ.Spielername+" gemerkt");  
                                temp +=  champ.Name+"("+champ.champion_pi+") von "+champ.Spielername+": Champ zu klein\r\n";
                                temp +=  champ.Name+"("+champ.champion_pi+") von "+champ.Spielername+": Champ gemerkt\r\n";
                            }
                            }else{
                                
                                this.log(champ.node_ID,selectedKE,"Knoten besezt KE"+selectedKE+"-"+champ.node_ID+"-"+champ.allianz_member_ID+"-"+champ.champion_ID);
                               
                                
                            }

                        }//END IF1                       
                        return 0;                        
                    })
                            
                    console.log("Total KE"+selectedKE+" PI:"+totalKE);
            })
        
        

    }

    log(node_ID,ke,text){
        var log = document.getElementById('log'+ke);
        if( !log.querySelector('#log_'+ke+'_'+node_ID+"_content") ){
            var z = document.createElement("DIV");
            z.addEventListener('click',function(){ document.querySelector('#log_'+ke+'_'+node_ID+"_content").style.display = "block";  })
            z.id = 'log_'+ke+'_'+node_ID;
            z.style.borderBottom = "1px solid #000";
            z.innerHTML = "Knoten "+node_ID;
            log.append(z);
            var zz = document.createElement("DIV");
            zz.id = 'log_'+ke+'_'+node_ID+"_content";
            zz.style.borderBottom = "1px solid #000";
            zz.innerHTML = text;
            zz.style.display = "none";
            log.append(zz);
        }else{
            var zzz = document.createElement("DIV");
            zzz.id = 'node_'+node_ID+"_content";
            zzz.innerHTML = text;
            
            log.querySelector('#log_'+ke+'_'+node_ID+"_content").append(zzz); 
        }     
        
        
    }

    render(){
        const {players} = this.state;  
        var keCounter = "counter_"+this.props.ke;
        var tblID = "PlayerTableKE"+this.props.ke;     
        return(<table id={tblID} className="PlayerTable" border="1" align="center" cellSpacing="0" cellPadding="0">
            <thead>
                <tr>
                    <th colSpan="2">KE {this.props.ke}</th>
                </tr>
                <tr>
                    <th>Player</th>
                    <th id={keCounter}>Champs</th>
                </tr>
            </thead>
            <tbody>
            {players.map((player,playerIndex)=>{   
                var playerID = "player_"+player.allianz_member_ID;   
                var champPlayerID = "champPlayer_"+player.allianz_member_ID;              
                return(
                    
                    <tr key={playerIndex} id={playerID} className="memberrow">
                        <td>{player.Name}</td>
                        <td id={champPlayerID}></td>
                    </tr>
                )
            })          
            }              
            

            </tbody>
        </table>);
    }
}

export default PlayerTable;