# Using the API

Welcome to the API docs.

All API access is over HTTP, and accessed from `quizzabull.herokuapp.com`. All data is sent and received as JSON.


## Authentication

Authentication is done through HTTP Token Authentican. Each User will be provided a token at registration. The registration route is an unauthenticated route. To access tokens you will need to login or create a user.

## User Options

### To Register/Create a User

`POST https://quizzabull.herokuapp.com/api/users`

The request body should be:

```json
{
  "name": "Bob",
  "username": "firstuser",
  "password": 123
}
```

The response will be:

```json
{
    "id": 10,
    "name": "Bob",
    "username": "firstuser",
    "password_digest": "$2a$10$uV2g7rjiBIsvBtd7Bxfh1eOcW4MJOj465zLAbW3DpZbwwPt8t55vK",
    "token": "Esgqrwg3AFts1v2bTAkBNyYD",
    "admin": false,
    "created_at": "2018-09-23T23:10:50.358Z",
    "updated_at": "2018-09-23T23:10:50.358Z"
}
```


### To Login

`POST https://quizzabull.herokuapp.com/api/login`

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
  "name": "Bob",
  "token": "Esgqrwg3AFts1v2bTAkBNyYD"
}
```



## Quiz Options

### Get the currently published quizzes as a user

`GET https://quizzabull.herokuapp.com/api/quizzes`

The response will be:

```json
{
    "quizzes": [
        {
            "quiz_id": 3,
            "quiz_title": "JavaScript arrays1",
            "published": true,
            "q_num": 0
        },
        {
            "quiz_id": 5,
            "quiz_title": "New published quiz",
            "published": true,
            "q_num": 0
        },
        {
            "quiz_id": 8,
            "quiz_title": "New published quiz",
            "published": true,
            "q_num": 0
        }
    ]
}

```

### Get a specific quiz

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


## Scoring


`POST https://quizzabull.herokuapp.com/api/scores`

The request body should be:

```json
{
  "user_id": 10,
  "quiz_id": 2,
  "answers": [14, 19, 23]
}
```

The response will be:

```json
{
    "score": 4
}
```



