---
title: React Hook Form with Zod Client-Side Validations and @shadcn/ui
date: 2024-02-09
tags:
  - react
  - react-hook-form
  - tools
---

***TLDR**; This page is for my personal usage. This guide is inspired heavily by [@shadcn/ui](https://ui.shadcn.com/). You can go directly to the page for manual installations and usage [there](https://ui.shadcn.com/docs/components/form).*

-- react-hook-forms [docs](https://react-hook-form.com/) --

-- make sure you have [tailwind](https://tailwindcss.com/docs/installation) installed --

packages installed: 
- @radix-ui/react-label
- @radix-ui/react-slot
- react-hook-form 
- @hookform/resolvers
- zod

npm:
```
npm install @radix-ui/react-label @radix-ui/react-slot react-hook-form @hookform/resolvers zod
```

yarn:
```
yarn add @radix-ui/react-label @radix-ui/react-slot react-hook-form @hookform/resolvers zod
```

bun:
```
bun add @radix-ui/react-label @radix-ui/react-slot react-hook-form @hookform/resolvers zod
```

we use @radix-ui for aria attributes accessibility, react-hook-form for our form's state management, and zod for our client-side validation.

(client-side validation can be optional but I wouldn't suggest)

### Install Form components from @shadcn/ui (optional)
https://ui.shadcn.com/docs/components/form#command
Suggest to do manual installation, gives you more control of your form ui components.

Below @ui/form.tsx I add a new component to handle uncontrolled field in react-hook-form. I simply changed the FormField into FormFieldControl for controlled field, and create a new FormField component for uncontrolled field.

@ui/label.tsx
```tsx
"use client"

import * as React from "react"
import * as LabelPrimitive from "@radix-ui/react-label"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const labelVariants = cva(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
)

const Label = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root> &
    VariantProps<typeof labelVariants>
>(({ className, ...props }, ref) => (
  <LabelPrimitive.Root
    ref={ref}
    className={cn(labelVariants(), className)}
    {...props}
  />
))
Label.displayName = LabelPrimitive.Root.displayName

export { Label }

```

@ui/form.tsx 
```tsx
import * as LabelPrimitive from '@radix-ui/react-label';
import { Slot } from '@radix-ui/react-slot';
import * as React from 'react';
import {
	Controller,
	ControllerProps,
	FieldPath,
	FieldValues,
	FormProvider,
	useFormContext
} from 'react-hook-form';

import { Label } from '@/components/@ui/label'; // import from shared @ui component, should also adjust path
import { cn } from '@/lib/utils'; // should adjust path to grab classnames

const Form = FormProvider;

type FormFieldContextValue<
	TFieldValues extends FieldValues = FieldValues,
	TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
> = {
	name: TName;
};

const FormFieldContext = React.createContext<FormFieldContextValue>(
	{} as FormFieldContextValue
);

const FormFieldControl = <
	TFieldValues extends FieldValues = FieldValues,
	TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>({
	control = undefined,
	...props
}: ControllerProps<TFieldValues, TName>) => {
	return (
		<FormFieldContext.Provider value={{ name: props.name }}>
			<Controller {...props} />
		</FormFieldContext.Provider>
	);
};

type FormFieldProps = {
	children: JSX.Element;
	name: string;
};
const FormField = ({ children = <></>, name }: FormFieldProps) => {
	return (
		<FormFieldContext.Provider value={{ name }}>
			{children}
		</FormFieldContext.Provider>
	);
};

const useFormField = () => {
	const fieldContext = React.useContext(FormFieldContext);
	const itemContext = React.useContext(FormItemContext);
	const { getFieldState, formState, ...rest } = useFormContext();

	const fieldState = getFieldState(fieldContext.name, formState);

	if (!fieldContext) {
		throw new Error('useFormField should be used within <FormField>');
	}

	const { id } = itemContext;

	return {
		id,
		name: fieldContext.name,
		formItemId: `${id}-form-item`,
		formDescriptionId: `${id}-form-item-description`,
		formMessageId: `${id}-form-item-message`,
		...fieldState,
		...rest
	};
};

type FormItemContextValue = {
	id: string;
};

const FormItemContext = React.createContext<FormItemContextValue>(
	{} as FormItemContextValue
);

const FormItem = React.forwardRef<
	HTMLDivElement,
	React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
	const id = React.useId();

	return (
		<FormItemContext.Provider value={{ id }}>
			<div ref={ref} className={cn('space-y-2', className)} {...props} />
		</FormItemContext.Provider>
	);
});
FormItem.displayName = 'FormItem';

const FormLabel = React.forwardRef<
	React.ElementRef<typeof LabelPrimitive.Root>,
	React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root>
>(({ className, ...props }, ref) => {
	const { error, formItemId } = useFormField();

	return (
		<Label
			ref={ref}
			className={cn(error && 'text-destructive', className)}
			htmlFor={formItemId}
			{...props}
		/>
	);
});
FormLabel.displayName = 'FormLabel';

const FormControl = React.forwardRef<
	React.ElementRef<typeof Slot>,
	React.ComponentPropsWithoutRef<typeof Slot>
>(({ ...props }, ref) => {
	const { error, formItemId, formDescriptionId, formMessageId } =
		useFormField();

	return (
		<Slot
			ref={ref}
			id={formItemId}
			aria-describedby={
				!error
					? `${formDescriptionId}`
					: `${formDescriptionId} ${formMessageId}`
			}
			aria-invalid={!!error}
			{...props}
		/>
	);
});
FormControl.displayName = 'FormControl';

const FormDescription = React.forwardRef<
	HTMLParagraphElement,
	React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => {
	const { formDescriptionId } = useFormField();

	return (
		<p
			ref={ref}
			id={formDescriptionId}
			className={cn('text-muted-foreground text-sm', className)}
			{...props}
		/>
	);
});
FormDescription.displayName = 'FormDescription';

const FormMessage = React.forwardRef<
	HTMLParagraphElement,
	React.HTMLAttributes<HTMLParagraphElement>
>(({ className, children, ...props }, ref) => {
	const { error, formMessageId } = useFormField();
	const body = error ? String(error?.message) : children;

	if (!body) {
		return null;
	}

	return (
		<p
			ref={ref}
			id={formMessageId}
			className={cn('text-destructive text-sm font-medium', className)}
			{...props}
		>
			{body}
		</p>
	);
});
FormMessage.displayName = 'FormMessage';

export {
	Form,
	FormControl,
	FormDescription,
	FormField, //for uncontrolled field
	FormFieldControl, // for controlled field
	FormItem,
	FormLabel,
	FormMessage,
	useFormField
};

```

### 1. Schema and Form validation
create zod schema and attach to useForm
```tsx
"use client"

import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

const formSchema = z.object({
  username: z.string().min(2).max(50),
})

type MyFormSchema = z.infer<typeof formSchema>

export default function MyFormComponent() {
	const form = useForm<MyFormSchema>({ 
		resolver: zodResolver(formSchema),
		defaultValues: { username: "", }, 
	})

	const onSubmit = (data: MyFormSchema) => {
		// do form submission here and call api
		console.log(data)
	}

	return (
		...
	)
}

```


### 2. Build Form

#### Uncontrolled Form:
At its simplest form without using @shadcn/ui at all
```jsx
const MyFormComponent = () => {
	...
	
	return (
		<form onSubmit={form.handleSubmit(onSubmit)}>
			<div>
				<label for="username" >Input:</label>
				<input type="text" id="username" {...register('username')}/>
			</div>
			<input type="submit" />
		</form>
	)
}

```

with @shadcn/ui
```tsx
import { Form, FormField, useFormField } from './@ui/form';
...

const MyFormComponent = () => {
	...
	
	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)}>
				<FormField name="username">
					<MyCustomField />
				</FormField>

				<input type="submit" value="submit" />
			</form>
		</Form>
	)
}

// create custom field that subscribe to the <FieldItem> context
const MyCustomField = () => {
	const { register, formItemId, name } = useFormField();

	return (
		<div>
			<label htmlFor={formItemId}>Input:</label>
			<input type="text" id={formItemId} {...register(name)} />
		</div>
	);
};
```

#### Controlled Form:
using @shadcn/ui
```tsx
import { 
	Form, 
	FormFieldControl, 
	FormItem, 
	FormLabel, 
	FormControl,
	FormDescription,
	FormMessage
} from './@ui/form';
...

const MyFormComponent = () => {
	return (
		<Form {...form}> 
			<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
				<FormFieldControl 
					control={form.control}
					name="username"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Username</FormLabel>
							<FormControl>
								<input placeholder="shadcn" {...field} />
							</FormControl>
							<FormDescription>This is your public display name.</FormDescription>
							<FormMessage />
						</FormItem>
						)} 
				/> 
				<Button type="submit">Submit</Button>
			</form>
		</Form>
	)
}
```