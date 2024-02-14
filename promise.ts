interface user{
    id:number,
    username:string,
    email:string
}

const FetchUsers =async ():Promise<user[]> => {
    const data = await fetch(
        'https://jsonplaceholder.typicode.com/users'
    ).then(res=>{return res.json()})
    .catch(err=>{
        if(err instanceof Error){console.log(err.message)}
    })
    return data
    
}
FetchUsers().then(users=>console.log(users))
type FetchUsersRTtype = Awaited<ReturnType<typeof FetchUsers>>
