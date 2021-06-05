# Getting Started with Deno

## Introduction
Deno is a simple, modern and secure runtime for JavaScript and TypeScript that uses V8 and is built in Rust. It was created by Ryan Dahl, the original developer of Node.js.

## Main Features

* It is based on modern features of the JavaScript language
* It has an extensive standard library
* It has TypeScript at its core, which brings a huge advantage in many different ways, including a first-class TypeScript support (you don’t have to separately compile TypeScript, it’s automatically done by Deno)
* Secure by default: No file, network, or environment access, unless explicitly enabled.
* It embraces ES modules
* It has no package manager
* It has a first-class await (top-level await)
* It as a built-in testing facility

## How to run the application

```bash
deno run --allow-net server.ts
```
