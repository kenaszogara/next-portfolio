import { sqliteTable, text } from 'drizzle-orm/sqlite-core';

export const users = sqliteTable('users', {
	id: text('id').notNull().primaryKey(),
	username: text('username').notNull().unique(),
	displayName: text('display_name').notNull(),
	milestones: text('milestones', { mode: 'json' }).notNull().default('{}'),
	createdAt: text('created_at').notNull().default('CURRENT_TIMESTAMP'),
	updatedAt: text('updated_at').notNull().default('CURRENT_TIMESTAMP')
});
