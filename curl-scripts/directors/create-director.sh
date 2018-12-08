#!/bin/bash

curl "http://localhost:4741/directors" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=${TOKEN}" \
  --data '{
    "director": {
      "first_name": "'"${FIRST}"'",
      "last_name": "'"${LAST}"'",
      "born_on": "'"${BORN}"'",
      "famous_movies": "'"${MOVIES}"'",
      "user_id": "'"${ID}"'"
    }
  }'

echo
