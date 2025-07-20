---
title: "Laravel Macros for Cleaner Reusability: Adding equals to Collections"
description: "Learn how to add an 'equals' macro to Laravel Collections for cleaner, reusable code."
date: 2024-06-10
---

## The Problem

As your Laravel applications grow, you often find yourself needing to add custom functionality to core classes like Collection, Response, Request, and others. Without a unified approach, this can lead to scattered helper functions or unnecessary subclassing, making your codebase harder to maintain and less expressive.

## Introduction

Laravel provides a flexible way to extend its core classes using macros. Macros let you add custom methods directly to built-in classes, allowing for cleaner, more reusable, and more expressive code throughout your application.

In this post, we'll demonstrate how to use macros by adding an `equals` method to Laravel Collections as a practical example. This approach can be applied to many other core classes as well.

## What We're Building

We'll add a `Collection::equals()` macro that checks whether two collections contain deeply equal items — both order and values matter for indexed arrays, and key/value pairs for associative arrays.

## Step 1: Create a Macro Service Provider

You can register your macros in any service provider. Many developers use the default `AppServiceProvider`, but for better organization—especially as your macro collection grows—it's a good idea to create a dedicated provider. In this example, we'll create a new one:

```bash
php artisan make:provider MacroServiceProvider
```

Register it in `config/app.php` or `bootstrap/app.php` if you're using the Laravel 10+ bootstrap setup.

## Step 2: Register the Macro

Open your `MacroServiceProvider` and inside the `boot()` method, add:

```php
use Illuminate\Support\Collection;

Collection::macro('equals', function ($compare) {

    /** @var \Illuminate\Support\Collection $this */
    if (! $compare instanceof Collection) {
        return false;
    }

    return $this->count() === $compare->count() &&
        $this->every(function ($value, $key) use ($compare) {
            return $compare->has($key) && $compare->get($key) === $value;
        });
});
```

## And the tests

```php
<?php

uses(Tests\TestCase::class);

it('can compare two collections for equality', function () {
    $collection1 = collect(['a' => 1, 'b' => 2, 'c' => 3]);
    $collection2 = collect(['a' => 1, 'c' => 3, 'b' => 2]);
    $collection3 = collect(['a' => 1, 'b' => 2]);

    // Test that two identical collections are equal
    expect($collection1->equals($collection2))->toBeTrue();

    // Test that collections with different keys or values are not equal
    expect($collection1->equals($collection3))->toBeFalse();
});
```

## When to Use Macros

Macros are ideal when you want to add custom methods to Laravel's core classes—such as Collection, Request, Response, Str, and more—without creating global helpers or unnecessary subclasses. They help keep your code expressive and DRY, especially for logic you use repeatedly across your application.

## Conclusion

Macros are a powerful feature in Laravel that let you extend core classes in a clean and reusable way. By organizing your macros in a dedicated service provider, you keep your codebase tidy and maintainable. Try adding your own macros to streamline your workflow and reduce repetitive code!

## Further Reading

- [Laravel Macros Documentation](https://laravel.com/docs/master/collections#extending-collections)
- [Service Providers in Laravel](https://laravel.com/docs/master/providers)

By leveraging macros, you can keep your codebase clean and expressive, extending Laravel's core functionality to suit your project's needs. The `equals` macro is a great example of how you can encapsulate common logic and make your collections even more powerful and reusable.
