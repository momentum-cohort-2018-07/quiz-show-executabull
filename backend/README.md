# Using the API

Welcome to the API docs.

All API access is over HTTP, and accessed from **TODO**. All data is sent and received as JSON.

## :lock: Symbol = Requires Token

## :a: Symbol = Must be Admin

## :smiley: Symbol = Must be Owner



## Authentication

Authentication is done through HTTP Token Authentican. Each User will be provided a token at registration. The registration route is an unauthenticated route. To access tokens you will need to login or create a user.

## User Options

### To Register/Create a User

`POST https://quizzabull.herokuapp.com/api/users`

The request body should be:

```json
{
  "username": "firstuser",
  "password": 123
}
```

The response will be:

```json
{
    "id": 11,
    "name": null,
    "username": "firstuser",
    "password_digest": "$2a$10$dwDtx4A7fqPxL4tXnBMfn.BOIY3HEAioRIUFHmIq5AjWvXbaSDYui",
    "token": "LuqaQPvgH6F39r8yS8fm3VSm",
    "admin": null,
    "created_at": "2018-09-24T01:57:52.249Z",
    "updated_at": "2018-09-24T01:57:52.249Z"
}
```


### To Login

`POST https://quizzabull.herokuapp.com/api/logins`

The request body should be:

```json
{
  "username": "firstuser",
  "password": 123
}
```

The response will be:

```json
{
    "name": null,
    "token": "LuqaQPvgH6F39r8yS8fm3VSm"
}
```

### To get a specific user with quizzes owned and scores for quizzes taken :lock:

`GET https://quizzabull.herokuapp.com/`

The response will be:

```json
```


### To get the current user profile :lock:

`GET...` 


### To get the current users Published Quizzes :lock: :a: 

`GET ...`

The response will be:

```json

```

### To get the current users Unpublished Quizzes :lock: :a: 

`GET ...`

The response will be:

```json

```


## Quiz Options

### Get the currently published quizzes as a user

`GET https://quizzabull.herokuapp.com/api/quizzes`

The response will be:

```json

```

### Get a specific quizzes :lock: :a:

`GET https://quizzabull.herokuapp.com/api/quizzes/:id`

The response will be:

```json
{
    "id": 1,
    "title": "JavaScript arrays",
    "questions": [
        {
            "q_id": 1,
            "q_text": "What method do you use to get all records that match a condition?",
            "answers": [
                {
                    "id": 1,
                    "a_text": "find"
                },
                {
                    "id": 2,
                    "a_text": "findAll"
                },
                {
                    "id": 3,
                    "a_text": "filter"
                },
                {
                    "id": 4,
                    "a_text": "reduce"
                }
            ]
        },
        {
            "q_id": 2,
            "q_text": "What does `findIndex` return if no records match its condition?",
            "answers": [
                {
                    "id": 5,
                    "a_text": "-1"
                },
                {
                    "id": 6,
                    "a_text": "false"
                },
                {
                    "id": 7,
                    "a_text": "null"
                }
            ]
        },
        {
            "q_id": 3,
            "q_text": "Which of the following does the method `map` do?",
            "answers": [
                {
                    "id": 8,
                    "a_text": "create a new array of shorter length than the original"
                },
                {
                    "id": 9,
                    "a_text": "create a new array of the same length as the original"
                },
                {
                    "id": 10,
                    "a_text": "return a single value"
                },
                {
                    "id": 11,
                    "a_text": "transform the original array"
                }
            ]
        }
    ]
}
```

### Create a new quizzes :lock: :a:

`POST https://quizzabull.herokuapp.com/api/quizzes`

The request body should be:

```json

```

The response will be:

```json

```

### Create questions for a quiz :lock: :a: :smiley:

`POST https://quizzabull.herokuapp.com/api/quizzes/:quiz_id/questions`

The request body should be:

```json

```

The response will be:

```json

```

### Create answers for a question :lock: :a: :smiley:

`POST https://quizzabull.herokuapp.com/api/quizzes/:quiz_id/questions/:question_id/answers`

The request body should be:





