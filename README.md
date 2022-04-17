# ts-rest-api

## dependencies

✨ bcrypt

✨ config

✨ cors

✨ dayjs

✨ express

✨ jsonwebtoken

✨ lodash

✨ mongoose

✨ nanoid

✨ pino

✨ pino-pretty

✨ zod

## endpoints

| Endpoint  | Http Request Method  | Body  | Params  | Args | Description  |
| ------------ | ------------ | ------------ | ------------ | ------------ | ------------ |
| /api/users  |  POST | {"email": "example@mail.com", "password": "M12345.", "passwordConfirmation": "M12345.", "name": "melihcelik"}  | Empty  | Empty | It allows us to register the user. |
| /api/sessions  |  POST | {"email": "example@mail.com", "password": "M12345."}  | Empty  | Empty | Allows us to log in. Returns tokens. |
| /api/sessions  |  GET | Empty  | Empty  | Empty | Get session list. |
| /api/sessions  |  DELETE | Empty  | Empty  | Empty | Terminates sessions by updating the session list. |
| /api/products  |  POST | { "title": "Product 1", "description": "Amazing product", "price": 99.99, "image": "comlaf.com/images/1" }  | Empty  | Empty | Creates a new product. |
| /api/products  |  PUT | { "title": "Product 1", "description": "Updated amazing product ", "price": 98.99, "image": "comlaf.com/images/1" }  | productId:ObjectId  | Empty | Update product by id. |
| /api/products  |  GET | Empty  | productId:ObjectId  | Empty | Get product by id. |
| /api/products  |  DELETE | Empty  | productId:ObjectId  | Empty | Delete product by id. |
