#!/bin/bash

echo_green() {
    echo
    echo -e "\033[0;34m$1\033[0m"
}

echo_red() {
    echo
    echo -e "\033[0;31m$1\033[0m"
}

if [ $# -eq 0 ]; then
    echo_red "Error: Commit message is required."
    exit 1
fi

git add .

if [ -z "$(git diff --cached)" ]; then
    echo_red "No changes to commit."
    exit 0
else
    echo_green "Changes added successfully."
fi

git commit -m "$1"
if [ $? -ne 0 ]; then
    echo_red "Commit failed."
    exit 1
else
    echo_green "Commit succeeded."
fi

git push
if [ $? -eq 0 ]; then
    echo_green "Push succeeded."
else
    echo_red "Push failed."
    exit 1
fi
