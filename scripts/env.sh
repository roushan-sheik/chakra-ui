#!/usr/bin/env bash

if [ -z "$flavor" ]; then
  # If flavor is not defined, copy .env.local-dev -> .env.local
  echo "No flavor specified. Using .env.local-dev..."
  if [ ! -f ".env.local-dev" ]; then
    echo "⚠️  .env.local-dev does not exist!"
    exit 1
  fi

  cp ".env.local-dev" ".env.local"
  echo "Copied .env.local-dev -> .env.local"
else
  # If flavor is set, use .env.{flavor} -> .env.local
  if [ ! -f ".env.$flavor" ]; then
    echo "⚠️  .env.$flavor does not exist!"
    exit 1
  fi

  echo "Copying .env.$flavor -> .env.local..."
  cp ".env.$flavor" ".env.local"
fi
