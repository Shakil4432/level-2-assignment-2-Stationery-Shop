{
  "message": "Validation failed",
  "success": false,
  "error": {
    "name": "ValidationError",
    "errors": {
      "price": {
        "message": "Price must be a positive number",
        "name": "ValidatorError",
        "properties": {
          "message": "Price must be a positive number",
          "type": "min",
          "min": 0
        },
        "kind": "min",
        "path": "price",
        "value": -5
      }
    }
  },
  "stack": "Error: Something went wrong\n    at app.js:23:13\n    at..."
}


{
    "message": "Validation failed",
    "success": false,
    "error": {
        "errors": {
            "category": {
                "name": "ValidatorError",
                "message": "`Educationa` is not a valid enum value for path `category`.",
                "properties": {
                    "message": "`Educationa` is not a valid enum value for path `category`.",
                    "type": "enum",
                    "enumValues": [
                        "Writing",
                        "Office Supplies",
                        "Art Supplies",
                        "Educational",
                        "Technology"
                    ],
                    "path": "category",
                    "value": "Educationa"
                },
                "kind": "enum",
                "path": "category",
                "value": "Educationa"
            }
        },
        "_message": "StationeryProduct validation failed",
        "name": "ValidationError",
        "message": "StationeryProduct validation failed: category: `Educationa` is not a valid enum value for path `category`."
    }
}