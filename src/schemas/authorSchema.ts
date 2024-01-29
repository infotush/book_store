import { object, string, TypeOf, array } from "zod";

/**
 * @openapi
 * components:
 *  schemas:
 *      CreateAuthorInput:
 *          type: object
 *          required:
 *              - fullName
 *              - bio
 *              - books
 *          properties:
 *              fullName:
 *                  type: string
 *                  default: John Doe
 *              bio:
 *                  type: string
 *                  default: some bio
 *              books:
 *                  type: array
 *                  default: ["Game of thrones"]
 *                  items:
 *                      type: string
 *      UpdateAuthorInput:
 *          type: object
 *          required:
 *              - fullName
 *              - bio
 *              - books
 *          properties:
 *              fullName:
 *                  type: string
 *                  default: John Doe
 *              bio:
 *                  type: string
 *                  default: some bio
 *              books:
 *                  type: array
 *                  default: ["Game of thrones"]
 *                  items:
 *                      type: string
 *
 *
 *
 */

const payload = {
  body: object({
    fullName: string({
      required_error: "Full name is required",
    }),
    bio: string({
      required_error: "bio is required",
    }),
    books: array(string()).nonempty({ message: "Books cannot be empty" }),
  }),
};

const params = {
  params: object({
    authorId: string({
      required_error: "authorId is required",
    }),
  }),
};

export const createAuthorSchema = object({
  ...payload,
});

export const deleteAuthorSchema = object({
  ...params,
});

export const getAuthorSchema = object({
  ...params,
});

export const updateAuthorSchema = object({
  ...payload,
  ...params,
});

export type CreateAuthorInput = TypeOf<typeof createAuthorSchema>;
export type UpdateAuthorInput = TypeOf<typeof updateAuthorSchema>;
export type GetAuthorInput = TypeOf<typeof getAuthorSchema>;
export type DeleteAuthorInput = TypeOf<typeof deleteAuthorSchema>;
