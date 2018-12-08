#!/bin/bash

curl "http://localhost:4741/directors/${ID}" \
  --include \
  --request PATCH \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=${TOKEN}" \
  --data '{
    "director": {
      "first_name": "'"${FIRST}"'",
      "last_name": "'"${LAST}"'",
      "born_on": "'"${BORN}"'",
      "famous_movies": "'"${MOVIES}"'"
    }
  }'

echo
