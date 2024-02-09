'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Form, FormField, useFormField } from '../@ui/form';

const formSchema = z.object({
	username: z.string().min(2).max(50)
});

type MyFormSchema = z.infer<typeof formSchema>;

export default function MyFormComponent() {
	const form = useForm<MyFormSchema>({
		resolver: zodResolver(formSchema),
		defaultValues: { username: '' }
	});

	const onSubmit = (data: MyFormSchema) => {
		// do form submission here and call api
		console.log(data);
	};

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)}>
				<FormField name="username">
					<MyCustomField />
				</FormField>

				<input type="submit" value="submit" />
			</form>
		</Form>
	);
}

const MyCustomField = () => {
	const { register, formItemId, name } = useFormField();

	return (
		<div>
			<label htmlFor={formItemId}>Input:</label>
			<input type="text" id={formItemId} {...register(name)} />
		</div>
	);
};
