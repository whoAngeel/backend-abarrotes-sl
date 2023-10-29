module.exports = {
    "get": {
        "tags": [
            "Usuarios"
        ],
        "summary": "Obtener todos los usuarios",
        "description": "Obtiene una lista de todos los usuarios si el usuario tiene un token Bearer y es administrador.",
        "security": [
            {
                "BearerAuth": [

                ]
            }
        ],
        "responses": {
            "200": {
                "description": "Usuarios obtenidos exitosamente.",
                "content": {
                    "application/json": {
                        "schema": {
                            "type": "array",
                            "items": {
                                "type": "object",
                                "properties": {
                                    "id": {
                                        "type": "integer",
                                        "example": 1
                                    },
                                    "username": {
                                        "type": "string",
                                        "example": "usuario1"
                                    },
                                    "role": {
                                        "type": "string",
                                        "example": "admin"
                                    }
                                }
                            }
                        }
                    }
                }
            },
            "401": {
                "description": "No se proporcionó un token Bearer o el usuario no tiene permisos de administrador."
            },
            "500": {
                "description": "Error del servidor."
            }
        }
    },
    "post": {
        "tags": ["Usuarios"],
        "summary": "Crear un nuevo usuario",
        "description": "Crea un nuevo usuario si el usuario tiene un token Bearer y es administrador.",
        "security": [
            {
                "BearerAuth": []
            }
        ],
        "requestBody": {
            "required": true,
            "content": {
                "application/json": {
                    "schema": {
                        "type": "object",
                        "properties": {
                            "username": {
                                "type": "string",
                                "description": "Nombre de usuario",
                            },
                            "password": {
                                "type": "string",
                                "description": "Contraseña",
                            },
                            "role": {
                                "type": "string",
                                "description": "Rol del usuario (admin, employee, dev)",
                            }
                        },
                        "required": ["username", "password", "role"]
                    }
                }
            }
        },
        "responses": {
            "201": {
                "description": "Usuario creado exitosamente.",
                "content": {
                    "application/json": {
                        "schema": {
                            "type": "object",
                            "properties": {
                                "id": {
                                    "type": "integer",
                                    "example": 1
                                },
                                "username": {
                                    "type": "string",
                                    "example": "nuevo_usuario"
                                },
                                "role": {
                                    "type": "string",
                                    "example": "admin"
                                }
                            }
                        }
                    }
                }
            },
            "401": {
                "description": "No se proporcionó un token Bearer o el usuario no tiene permisos de administrador."
            },
            "500": {
                "description": "Error del servidor."
            }
        }
    }

};
