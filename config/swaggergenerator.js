module.exports["swagger-generator"] = {
    swaggerJsonPath: './swagger/swagger.json',
    swagger: {
        servers: [
        ],
        components: {
            securitySchemes: {
              JWT: {
                type: "apiKey",
                in: "header",
                name: "access_token",
                description: "JWT Authorization"
              },
            }
        },
        info: {
            title: "Swagger Json",
            description: "This is a generated swagger json for sails project",
            termsOfService: "http://example.com/terms",
            contact: {
                name: "Author",
                url: "http://example.com",
                email: "example@gmail.com"
            },
            license: {
            },
            version: "1.0.0"
        },
        externalDocs: {
            url: "/"
        }
    },
    excludeDeprecatedPutBlueprintRoutes: true,
    // includeRoute: function(routeInfo) { return true; },
    // updateBlueprintActionTemplates: () => {}
    // postProcess: function(specifications) {  }
    // refer https://github.com/theoomoregbee/sails-hook-swagger-generator
};