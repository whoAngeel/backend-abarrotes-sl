module.exports = {
    "get": {
        "tags": ["Empleados"],
        "summary": "Obtener un empleado por ID",
        "description": "Obtiene un empleado por su ID si el usuario tiene un token Bearer y es administrador.",
        "security": [
            {
                "BearerAuth": []
            }
        ],
        "parameters": [
            {
                "name": "id",
                "in": "path",
                "required": true,
                "schema": {
                    "type": "integer",
                    example: 2
                },
                "description": "ID del empleado a obtener."
            }
        ],
        "responses": {
            "200": {
                "description": "Empleado obtenido exitosamente.",
                "content": {
                    "application/json": {
                        "schema": {
                            "type": "object",
                            "properties": {
                                "id": {
                                    "type": "integer",
                                    "example": 3
                                },
                                "curp": {
                                    "type": "string",
                                    "example": "QRST90132348UVWX6P"
                                },
                                "rfc": {
                                    "type": "string",
                                    "example": "QRST901234U1V"
                                },
                                "fullname": {
                                    "type": "string",
                                    "example": "Angel Jesus"
                                },
                                "phone": {
                                    "type": "string",
                                    "example": "3335857977"
                                },
                                "email": {
                                    "type": "string",
                                    "example": "angel@example.com"
                                },
                                "salary": {
                                    "type": "number",
                                    "example": 2800.00
                                },
                                "user": {
                                    "type": "object",
                                    "properties": {
                                        "createdAt": {
                                            "type": "string",
                                            "format": "date-time"
                                        },
                                        "id": {
                                            "type": "integer",
                                            "example": 3
                                        },
                                        "username": {
                                            "type": "string",
                                            "example": "angel"
                                        },
                                        "role": {
                                            "type": "string",
                                            "example": "admin"
                                        }
                                    }
                                },
                            },
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
        "tags": ["Empleados"],
        "summary": "Actualizar un empleado por ID",
        "description": "Actualiza un empleado por su ID si el usuario tiene un token Bearer y es administrador.",
        "security": [
            {
                "BearerAuth": []
            }
        ],
        "parameters": [
            {
                "name": "id",
                "in": "path",
                "required": true,
                "schema": {
                    "type": "integer",
                    example: 2
                },
                "description": "ID del empleado a actualizar."
            }
        ],
        "requestBody": {
            "required": true,
            "content": {
                "application/json": {
                    "schema": {
                        "type": "object",
                        "properties": {
                            "rfc": { "type": "string" },
                            "curp": { "type": "string" },
                            "fullname": { "type": "string" },
                            "phone": { "type": "string" },
                            "email": { "type": "string" },
                            "salary": { "type": "number" },
                            "userId": { "type": "integer" }
                        }
                    }
                }
            }
        },
        "responses": {
            "200": {
                "description": "Empleado actualizado exitosamente.",
                "content": {
                    "application/json": {
                        "schema": {
                            "type": "object",
                            "properties": {
                                "id": { "type": "integer", "example": 1 },
                                "rfc": { "type": "string", "example": "RFC1234567890" },
                                "curp": { "type": "string", "example": "CURP12345678901234567" },
                                "fullname": { "type": "string", "example": "Nombre Completo" },
                                "phone": { "type": "string", "example": "123-456-7890" },
                                "email": { "type": "string", "example": "correo@empresa.com" },
                                "salary": { "type": "number", "example": 50000 }
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
        "tags": ["Empleados"],
        "summary": "Eliminar un empleado por ID",
        "description": "Elimina un empleado por su ID si el usuario tiene un token Bearer y es administrador.",
        "security": [
            {
                "BearerAuth": []
            }
        ],
        "parameters": [
            {
                "name": "id",
                "in": "path",
                "required": true,
                "schema": {
                    "type": "integer",
                    example: 2
                },
                "description": "ID del empleado a eliminar."
            }
        ],
        "responses": {
            "200": {
                "description": "Empleado eliminado exitosamente."
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
