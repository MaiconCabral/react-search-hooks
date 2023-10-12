import React , {useState, useEffect} from 'react';

// import { Container } from './styles';

const SearchComponent = () =>{
    // hooks usestate
    const [users, setUsers] = useState([])
    const [search, setSearch] = useState("")

    // func tratra dads da api
    const URL = 'https://jsonplaceholder.typicode.com/users'

    const showData = async () => {
        const response = await fetch(URL)
        const data = await response.json()
        console.log(data)
        setUsers(data)
    } 
    
    //func de busca
    const searcher = (e) => {
        setSearch(e.target.value)
        //console.log(e)
    }
    
    //metodo de filtro
    // let results = []
    // if(!searcher){
    //     results = users
    // }else{
    //     results = users.filter((dados)=> 
    //     dados.name.toLowerCase().includes(search.toLocaleLowerCase())
    //     )
    // }

    //metodo de filtro com ternary 
    // filter cria um novo array com os dados filtrados
    // includes inclui verdadeiro ou false
    const results = !search ? users : users.filter((dados)=> dados.name.toLowerCase().includes(search.toLocaleLowerCase()))

    useEffect( () =>{
        showData()
    }, [])

    // renderizar a view
    return (
        <div className='row'>
            <div className='col-10 offset-1 col-md-10 offset-md-1'>
                <input value={search} onChange={searcher} type="text" placeholder='Search' className='form-control mt-3'/>
                <table className='table table-striped table-hover mt-5 shadow-lg'>
                    <thead>
                        <tr className='bg-curso text-white'>
                            <th>NAME</th>
                            <th>USER NAME</th>
                        </tr>
                    </thead>
                    <tbody>
                    { results.map( (user) =>(
                        <tr key={user.id}>
                            <td>{user.name}</td>
                            <td>{user.username}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
  )
}

export default SearchComponent;