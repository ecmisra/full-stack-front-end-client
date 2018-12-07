#!/bin/bash

curl "https://directors-back-end.herokuapp.com" \
  --include \
  --request DELETE \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=${TOKEN}"

echo
