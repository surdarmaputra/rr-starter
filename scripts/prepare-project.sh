#!/bin/sh

bun install
git config --unset core.hooksPath
git config core.hooksPath .githooks
bunx lefthook install
