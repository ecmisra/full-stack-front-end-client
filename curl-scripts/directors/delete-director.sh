#!/bin/bash

curl "http://localhost:4741/directors/${ID}" \
  --include \
  --request DELETE \

echo
