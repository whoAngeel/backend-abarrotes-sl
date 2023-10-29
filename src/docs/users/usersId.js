module.exports = {
    "get": {
        "tags": [
            "Usuarios"
        ],
        "summary": "Obtener un usuario por ID",
        "description": "Obtiene un usuario por su ID si el usuario tiene un token Bearer y es administrador.",
        "security": [
            {
                "BearerAuth": [

                ]
            }
        ],
        "parameters": [
            {
                "name": "id",
                "in": "path",
                "required": true,
                "schema": {
                    "type": "integer",
                    "example": 1
                },
                "description": "ID del usuario a obtener."
            }
        ],
        "responses": {
            "200": {
                "description": "Usuario obtenido exitosamente.",
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
            },
            "401": {
                "description": "No se proporcionó un token Bearer o el usuario no tiene permisos de administrador."
            },
            "500": {
                "description": "Error del servidor."
            }
        }
    },
    "patch": {
        "tags": [
            "Usuarios"
        ],
        "summary": "Actualizar un usuario por ID",
        "description": "Actualiza un usuario por su ID si el usuario tiene un token Bearer y es administrador.",
        "security": [
            {
                "BearerAuth": [

                ]
            }
        ],
        "parameters": [
            {
                "name": "id",
                "in": "path",
                "required": true,
                "schema": {
                    "type": "integer",
                    "example": 1
                },
                "description": "ID del usuario a actualizar."
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
                                "type": "string"
                            },
                            "password": {
                                "type": "string"
                            },
                            "role": {
                                "type": "string"
                            }
                        }
                    }
                }
            }
        },
        "responses": {
            "200": {
                "description": "Usuario actualizado exitosamente.",
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
                                    "example": "usuario_actualizado"
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
    },
    "delete": {
        "tags": [
            "Usuarios"
        ],
        "summary": "Eliminar un usuario por ID",
        "description": "Elimina un usuario por su ID si el usuario tiene un token Bearer y es administrador.",
        "security": [
            {
                "BearerAuth": [

                ]
            }
        ],
        "parameters": [
            {
                "name": "id",
                "in": "path",
                "required": true,
                "schema": {
                    "type": "integer",
                    "example": 1
                },
                "description": "ID del usuario a eliminar."
            }
        ],
        "responses": {
            "200": {
                "description": "Usuario eliminado exitosamente."
            },
            "401": {
                "description": "No se proporcionó un token Bearer o el usuario no tiene permisos de administrador."
            },
            "500": {
                "description": "Error del servidor."
            }
        }
    }
}
