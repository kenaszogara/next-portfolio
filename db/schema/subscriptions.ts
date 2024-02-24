import { sqliteTable, text } from 'drizzle-orm/sqlite-core';
import { users } from './users';

export enum SubscriptionType {
	Free = 'free',
	Premium = 'premium'
}

export const subscriptions = sqliteTable('subscriptions', {
	id: text('id').notNull().primaryKey(),
	userId: text('user_id')
		.notNull()
		.references(() => users.id),
	type: text('type', {
		enum: [SubscriptionType.Free, SubscriptionType.Premium]
	}).notNull(),
	startDate: text('start_date').notNull(),
	endDate: text('end_date').notNull(),
	createdAt: text('created_at').notNull().default('CURRENT_TIMESTAMP'),
	updatedAt: text('updated_at').notNull().default('CURRENT_TIMESTAMP')
});
