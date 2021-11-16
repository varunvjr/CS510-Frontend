import React from 'react'
import { useState,useEffect} from 'react'
import { Button, Container } from 'react-bootstrap';
import { useHistory } from 'react-router';
import axios from 'axios';

const Search = () => {
    const history=useHistory();
    let charId = -1; 
    let characterDetails;
    let url="https://thronesapi.com/api/v2/Characters"
    let [character,setCharacter]=useState('');
    const [list,setList]=useState([])
    const [id,setId]=useState(-1);
  
    const findCharacter= async (ch)=>{
        console.log("Character  is: ",ch);
       
        // eslint-disable-next-line array-callback-return
        list.map((name)=>{
            if(name.firstName.toLowerCase()===ch||name.fullName.toLowerCase()===ch){
                console.log("Updating" + name.id)
                charId = name.id;
                setId(name.id);
            }
            console.log("character Id: ",id);
        })
        if(charId<0){
            alert("Character not found search again");
        }else{
            url += "/" + charId
            let {data}= await axios.get(url);
            console.log(data)
            characterDetails=data;
            console.log("Character Details :",characterDetails)
            history.push({
                pathname:'/details',
                data:characterDetails
            })
        }
    }

    const submitHandler=()=>{
        console.log("character value is",character);
        character=character.toLowerCase();
        findCharacter(character);
    }
    useEffect(()=>{
        const getCharacterList=async()=>{
            const {data}=await axios.get(url);
            setList(data);
        }
        getCharacterList();
    },[url])
    console.log("List:  ",list);
    return (
        <div>
            <h3>Enter the Character Name: </h3>
            <Container>
            <input
            style={{width:"30%",
                    height:"35px"
            }}
            name="character"
            type="text"
            placeholder="Enter the Character Name"
            value={character}
            onChange={(e)=>{setCharacter(e.target.value)}}
            />
        <Button style={{marginLeft:"10px"}} onClick={submitHandler} className="btn btn-primary">Search</Button>
        </Container>
           
            
        </div>
    )
}

export default Search
