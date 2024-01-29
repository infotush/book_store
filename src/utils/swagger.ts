import swaggerJsdoc from "swagger-jsdoc";
import { version } from "../../package.json";

class SwaggerJsDoc {
  public options: swaggerJsdoc.Options | undefined;
  constructor() {
    this.defineSwaggerOptions();
  }
  private defineSwaggerOptions() {
    this.options = {
      definition: {
        openapi: "3.0.0",
        info: {
          title: "Online Book store application",
          description: `This is a simple online book store application.
           The application is designed to provide user an interface to search for books of different kinds such as ebooks,
           printed books and audio books`,
          version,
        },
        components: {
          securitySchemes: {
            bearerAuth: {
              type: "http",
              scheme: "bearer",
              bearerFormat: "JWT",
            },
          },
        },
        security: [
          {
            bearerAuth: [],
          },
        ],
      },
      apis: ["./src/routes/**/*.ts", "./src/schemas/*.ts"],
    };
  }
}

const swaggerSpec = swaggerJsdoc(new SwaggerJsDoc().options);

export default swaggerSpec;
