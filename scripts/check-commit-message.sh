#!/bin/bash

echo "Commit message: $(cat "$1")"

if ! head -1 "$1" | grep -qE "^(feat|fix|chore|docs|test|style|refactor|perf|build|ci|revert)(\(.+?\))?: .{1,}$"; then
  echo "Aborting commit. Your commit message is invalid. Please follow the conventional commit format see https://www.conventionalcommits.org/en/v1.0.0/#summary" >&2
  exit 1
fi

if ! head -1 "$1" | grep -qE "^.{1,88}$"; then
  echo "Aborting commit. Your commit message is too long." >&2
  exit 1
fi