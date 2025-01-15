# Unhandled Errors in Node.js HTTP Server

This repository demonstrates a common error in Node.js applications: insufficient error handling in HTTP servers. The initial `bug.js` example shows a server vulnerable to crashes due to improper error management. The improved `bugSolution.js` provides a more robust solution. 

## Problem

The original code lacks comprehensive error handling.  If the server encounters an error (e.g., port in use, network failure), it may crash without providing useful information for debugging.  Logging is also insufficient.

## Solution

The solution incorporates more thorough error handling and logging.  It uses `try...catch` blocks to trap potential errors and provides detailed error messages including stack traces for easier troubleshooting.  It also gracefully handles various error scenarios to maintain server stability.