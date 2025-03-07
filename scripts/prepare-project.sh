#!/bin/sh

git config --unset core.hooksPath
git config core.hooksPath .githooks
bun install
bunx lefthook install
