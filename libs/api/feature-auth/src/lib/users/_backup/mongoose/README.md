## How to debug

1. createUser  

`POST: http://localhost:3333/api/graphql`  

```graphql
mutation createUser{
    createUser(
        createUserData: {
            email: "test-user1@gmail.com",
            password: "test1234"
        }
    )
    {
        _id
        email
    }
}
```

2. login

`POST:http://localhost:3333/api/auth/login`

```json
{
    "email": "test-user1@gmail.com",
    "password": "test1234"
}
```

3. currentUser

`POST: http://localhost:3333/api/graphql`  

```graphql
query currentUser{
  currentUser{
      _id
      email
  }
}
```

4. logout

`POST:http://localhost:3333/api/auth/logout`  
