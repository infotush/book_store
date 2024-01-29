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
      apis: ["./src/routes/**/*.ts"],
    };
  }
}

const swaggerSpec = swaggerJsdoc(new SwaggerJsDoc().options);

export default swaggerSpec;
