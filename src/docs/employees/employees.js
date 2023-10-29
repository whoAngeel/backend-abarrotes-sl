module.exports = {
    "get": {
        "tags": ["Empleados"],
        "summary": "Obtener todos los empleados",
        "description": "Obtiene una lista de todos los empleados si el usuario tiene un token Bearer y es administrador.",
        "security": [
            {
                "BearerAuth": []
            }
        ],
        "responses": {
            "200": {
                "description": "Empleados obtenidos exitosamente.",
                "content": {
                    "application/json": {
                        "schema": {
                            "type": "array",
                            "items": {
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
        "tags": ["Empleados"],
        "summary": "Crear un nuevo empleado",
        "description": "Crea un nuevo empleado si el usuario tiene un token Bearer y es administrador.",
        "security": [
            {
                "bearerAuth": []
            }
        ],
        "requestBody": {
            "required": true,
            "content": {
                "application/json": {
                    "schema": {
                        "type": "object",
                        "properties": {
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
                        "required": ["rfc", "curp", "fullname", "email", "user"]
                    }
                }
            }
        },
        "responses": {
            "201": {
                "description": "Empleado y usuario creados correctamente.",
                "content": {
                    "application/json": {
                        "schema": {
                            "type": "object",
                            "properties": {
                                "message": {
                                    "type": "string",
                                    "example": "Empleado y usuario creados correctamente"
                                },
                                "employee": {
                                    "type": "object",
                                    "properties": {
                                        "createdAt": {
                                            "type": "string",
                                            "format": "date-time"
                                        },
                                        "id": {
                                            "type": "integer",
                                            "example": 2
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
                                        "userId": {
                                            "type": "integer",
                                            "example": 3
                                        }
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

    }
}
