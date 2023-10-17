import { z } from "zod";

const NewProductSchemaErrors = Object.freeze({
  INVALID_TITLE_MIN: "Title length must be above 2 characters",
  INVALID_TITLE_MAX: "Title length must be below 200 characters",
  INVALID_TITLE_ALPHNAMERIC: "Title must contain only alphanumeric characters",
  INVALID_CONTENT_MIN: "Content length must be above 2 characters",
  INVALID_CONTENT_MAX: "Content length must be below 200 characters",
});

const newNoteSchema = z.object({
  title: z
    .string()
    .min(2, { message: NewProductSchemaErrors.INVALID_TITLE_MIN })
    .max(200, { message: NewProductSchemaErrors.INVALID_TITLE_MAX })
    .regex(/^[a-zA-Z0-9\s]*$/, {
      message: NewProductSchemaErrors.INVALID_TITLE_ALPHNAMERIC,
    }),
  content: z
    .string()
    .min(2, { message: NewProductSchemaErrors.INVALID_CONTENT_MIN })
    .max(200, { message: NewProductSchemaErrors.INVALID_CONTENT_MAX }),
});

export { newNoteSchema };
