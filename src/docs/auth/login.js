module.exports = {
    get: {
        "tags": ["Autenticación"],
        "summary": "Iniciar sesión",
        "description": "Iniciar sesión de usuario y obtener un token de acceso.",
        "requestBody": {
            "required": true,
            "content": {
                "application/json": {
                    "schema": {
                        "type": "object",
                        "properties": {
                            "username": {
                                "type": "string",
                                "example": "usuario1"
                            },
                            "password": {
                                "type": "string",
                                "example": "password2"
                            }
                        },
                        "required": ["username", "password"]
                    }
                }
            }
        },
        "responses": {
            "200": {
                "description": "Inicio de sesión exitoso. Devuelve un token de acceso.",
                "content": {
                    "application/json": {
                        "schema": {
                            "type": "object",
                            "properties": {
                                "user": {
                                    "type": "object",
                                    "properties": {
                                        "id": {
                                            "type": "integer",
                                            "example": 3
                                        },
                                        "username": {
                                            "type": "string",
                                            "example": "usuario2"
                                        },
                                        "role": {
                                            "type": "string",
                                            "example": "password2"
                                        },
                                        "createdAt": {
                                            "type": "string",
                                            "example": "2023-10-22T04:37:42.105Z"
                                        }
                                    }
                                },
                                "token": {
                                    "type": "string",
                                    "example": "1fadfasfda.payload.kiwQxoMCF2ks6-fasdfadfasdfadfasdfasdfasdfa"
                                }
                            }
                        }
                    }
                }
            },
            "401": {
                "description": "Unauthorized"
            },
            "500": {
                "description": "Error del servidor."
            }
        }
    }
}
