import { pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";

export const notes = pgTable("notes", {
  id: serial("id").primaryKey(),
  userId: text("user_id").notNull(),
  text: text("text").notNull(),
  title: text("title"),
  image: text("image"),
  warrantyStartDate: timestamp("warranty_start_date"),
  warrantyEndDate: timestamp("warranty_end_date"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export type Note = typeof notes.$inferSelect;